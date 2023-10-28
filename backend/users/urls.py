from django.urls import include, path
from djoser.views import TokenCreateView

from .views import TokenCreateByPhoneView, payment, send_email

urlpatterns = [
    path('', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('auth/token-email/',
         TokenCreateView.as_view(),
         name='token_email'
         ),
    path(
        'auth/token-phone/',
        TokenCreateByPhoneView.as_view(),
        name='token_phone'
    ),
    path('send-order/', send_email, name='send_order'),
    path('payment/', payment, name='payment'),
]
