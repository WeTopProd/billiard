from django.shortcuts import get_object_or_404
from rest_framework import status, views, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.validators import ValidationError
from rest_framework.response import Response

from .pagination import CustomPagination
from .filters import CueFilter
from .models import Cue, ShoppingCart, Favorite
from .permissions import IsOwnerOrReadOnly
from .serializers import CueSerializer, ShortCueSerializer, FavoriteSerializer


class CueViewSet(viewsets.ModelViewSet):
    queryset = Cue.objects.all()
    # permission_classes = (IsOwnerOrReadOnly,)
    pagination_class = CustomPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CueFilter
    serializer_class = CueSerializer

    @action(
        detail=True,
        methods=('post', 'delete'),
        permission_classes=(IsAuthenticated,)
    )
    def shopping_cart(self, request, pk):
        if request.method == 'POST':
            return self.add_cue(ShoppingCart, request, pk)
        else:
            return self.delete_cue(ShoppingCart, request, pk)

    def add_cue(self, model, request, pk):
        cue = get_object_or_404(Cue, pk=pk)
        user = self.request.user
        if model.objects.filter(cue=cue, user=user).exists():
            raise ValidationError('Кий уже добавлен')
        model.objects.create(cue=cue, user=user)
        serializer = ShortCueSerializer(cue)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

    def delete_cue(self, model, request, pk):
        cue = get_object_or_404(Cue, pk=pk)
        user = self.request.user
        obj = get_object_or_404(model, cue=cue, user=user)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class FavoriteView(views.APIView):
    permission_classes = (IsAuthenticated, )

    def post(self, request, favorite_id):
        user = request.user
        data = {
            'cue': favorite_id,
            'user': user.id
        }
        serializer = FavoriteSerializer(
            data=data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, favorite_id):
        user = request.user
        cue = get_object_or_404(Cue, id=favorite_id)
        Favorite.objects.filter(user=user, cue=cue).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
