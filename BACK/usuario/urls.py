# Django import
from django.urls import path

# Views
from usuario.views import UserApiView

# Urls
urlpatterns = [
    path('usuario-list/', UserApiView.as_view(), name='usuario_list'),
]