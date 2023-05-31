from drf_extra_fields.fields import Base64ImageField
from rest_framework import serializers, validators

from .models import (Cue, Favorite, ShoppingCart, Image)


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('images', )


class CueSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)
    is_favorited = serializers.SerializerMethodField()
    is_in_shopping_cart = serializers.SerializerMethodField()

    class Meta:
        model = Cue
        fields = (
            'id',
            'title',
            'description',
            'composition',
            'structure',
            'workshop',
            'weight',
            'article',
            'price',
            'play',
            'images',
            'count',
            'is_favorited',
            'is_in_shopping_cart'
        )

    def in_list(self, obj, model):
        request = self.context.get('request')
        if request is None or request.user.is_anonymous:
            return False
        return model.objects.filter(user=request.user, cue=obj).exists()

    def get_is_favorited(self, obj):
        return self.in_list(obj, Favorite)

    def get_is_in_shopping_cart(self, obj):
        return self.in_list(obj, ShoppingCart)


class ShortCueSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cue
        fields = (
            'id',
            'title',
            'image',
            'count',
            'price'
        )


class ShoppingCartSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShoppingCart
        fields = (
            'cue',
            'user',
            'count',
            'price'
        )


class FavoriteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Favorite
        fields = (
            'user',
            'cue'
        )
        validators = [
            validators.UniqueTogetherValidator(
                queryset=Favorite.objects.all(),
                fields=('user', 'cue'),
                message='Кий уже добавлен в избранное'
            )
        ]

    def to_representation(self, instance):
        request = self.context['request']
        return ShortCueSerializer(
            instance.cue,
            context={'request': request}
        ).data
