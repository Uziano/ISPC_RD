# Django import
from django.urls import path

# Views
from apps.usuario.api.views import UserApiView, UserDetailApiView, Login

# Urls
urlpatterns = [
    path('usuario-list/', UserApiView.as_view(), name='usuario_list'),
    path('login/', Login.as_view(), name='user_login'),
    path('usuario-detail/<int:pk>', UserDetailApiView.as_view(), name='usuario_detail_api')
]