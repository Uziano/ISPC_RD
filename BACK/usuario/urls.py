# Django import
from django.urls import path

# Views
from usuario.views import UserApiView, UserDetailApiView

# Urls
urlpatterns = [
    path('usuario-list/', UserApiView.as_view(), name='usuario_list'),
    path('usuario-detail/<int:pk>', UserDetailApiView.as_view(), name='usuario_deatail_api')
]