from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import CueViewSet, FavoriteView, shopping_cart_data

router = DefaultRouter()
router.register('cue', CueViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('cue/<int:favorite_id>/favorite/', FavoriteView.as_view()),
    path('shopping_cart/', shopping_cart_data, name='shopping_cart_data'),
]
