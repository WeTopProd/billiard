from django.shortcuts import get_object_or_404
from rest_framework import status, views, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.validators import ValidationError
from rest_framework.response import Response
from django.http import JsonResponse

from .pagination import CustomPagination
from .filters import CueFilter
from .models import Cue, ShoppingCart, Favorite
from .permissions import IsOwnerOrReadOnly
from .serializers import CueSerializer, ShortCueSerializer, FavoriteSerializer, ShoppingCartSerializer


class CueViewSet(viewsets.ModelViewSet):
    queryset = Cue.objects.all()
    permission_classes = (IsOwnerOrReadOnly,)
    pagination_class = CustomPagination
    filter_backends = (DjangoFilterBackend,)
    filterset_class = CueFilter
    serializer_class = CueSerializer

    @action(
        detail=True,
        methods=('post', 'delete', 'patch'),
        permission_classes=(IsAuthenticated,)
    )
    def shopping_cart(self, request, pk):
        if request.method == 'POST':
            return self.add_cue(ShoppingCart, request, pk)
        if request.method == 'DELETE':
            return self.delete_cue(ShoppingCart, request, pk)
        if request.method == 'PATCH':
            return self.change_count(ShoppingCart, request, pk)

    def add_cue(self, model, request, pk):
        cue = get_object_or_404(Cue, pk=pk)
        user = self.request.user
        if model.objects.filter(cue=cue, user=user).exists():
            raise ValidationError('Кий уже добавлен')
        model.objects.create(cue=cue, user=user, price=cue.price)
        serializer = ShortCueSerializer(cue)
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)

    def change_count(self, model, request, pk):
        cue = get_object_or_404(Cue, pk=pk)
        user = self.request.user
        shopping_cart = get_object_or_404(model, cue=cue, user=user)
        if 'count' in request.data:
            new_count = request.data['count']
            price = cue.price
            new_price = new_count * price
            shopping_cart.count = new_count
            shopping_cart.price = new_price
            shopping_cart.save()
        else:
            return ValidationError('поле сount не найдено')
        serializer = ShoppingCartSerializer(shopping_cart)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def delete_cue(self, model, request, pk):
        cue = get_object_or_404(Cue, pk=pk)
        user = self.request.user
        obj = get_object_or_404(model, cue=cue, user=user)
        obj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[IsAuthenticated]
    )
    def basket(self, request):
        user = request.user
        shopping_cart = ShoppingCart.objects.filter(user=user)
        serializer = ShoppingCartSerializer(shopping_cart, many=True)

        # Добавляем данные о кие в каждый объект корзины
        for item in serializer.data:
            cue_id = item['cue']
            cue = get_object_or_404(Cue, id=cue_id)
            cue_serializer = CueSerializer(cue)
            item['cue'] = cue_serializer.data

        return Response(data=serializer.data, status=status.HTTP_200_OK)


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
