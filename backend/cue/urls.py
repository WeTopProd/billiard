from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import CueViewSet, FavoriteView

router = DefaultRouter()
router.register('cue', CueViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('cue/<int:favorite_id>/favorite/', FavoriteView.as_view()),
]
