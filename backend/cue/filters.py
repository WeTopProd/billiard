from django_filters.rest_framework import FilterSet, filters

from users.models import User

from .models import Cue


class CueFilter(FilterSet):
    title = filters.CharFilter(lookup_expr='icontains', field_name='title')
    composition = filters.NumberFilter(lookup_expr='exact',
                                       field_name='composition')
    workshop = filters.CharFilter(lookup_expr='icontains',
                                  field_name='workshop')
    weight = filters.NumberFilter(lookup_expr='exact', field_name='weight')
    article = filters.NumberFilter(lookup_expr='exact', field_name='article')
    price = filters.NumberFilter(lookup_expr='exact', field_name='price')
    play = filters.CharFilter(lookup_expr='icontains', field_name='play')
    is_favorited = filters.BooleanFilter(method='get_is_favorited')
    is_in_shopping_cart = filters.BooleanFilter(
        method='get_is_in_shopping_cart'
    )

    class Meta:
        model = Cue
        fields = (
            'title',
            'composition',
            'workshop',
            'weight',
            'article',
            'price',
            'play',
            'is_favorited',
            'is_in_shopping_cart'
        )

    def get_is_favorited(self, queryset, name, value):
        if self.request.user.is_authenticated and value is True:
            return queryset.filter(users_favorites__user=self.request.user)
        return queryset

    def get_is_in_shopping_cart(self, queryset, name, value):
        if self.request.user.is_authenticated and value is True:
            return queryset.filter(shopping_cart__user=self.request.user)
        return queryset
