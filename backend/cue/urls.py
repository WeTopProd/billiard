from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CueViewSet

router = DefaultRouter()
router.register('cue', CueViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('recipes/<int:favorite_id>/favorite/', FavoriteView.as_view()),
]
