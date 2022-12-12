# Django import
from django.urls import path

# Views
from apps.notas.api.views import NotesApiView, NotesDetailApiView

# Urls
urlpatterns = [
    path('notas-list/', NotesApiView.as_view(), name='notas_list'),
    path('nota-detail/<int:pk>', NotesDetailApiView.as_view(), name='nota_api')
]