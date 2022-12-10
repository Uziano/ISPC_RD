from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

# Create your models here.
class Notes():
    def _create_note(self, title, description, current_state, **extra_fields):
        note = self.model(
            title = title,
            description = description,
            state = current_state,
            **extra_fields
        )
        note.set_title(title)
        # note.save(using=self.db)
        return note

    #Current_State es si esta por hacerse, en proceso o finalizada.
    #Cuando se crea es none o 'To Do' o 'Por hacer'
    def create_note(self, title, description, current_state=None, **extra_fields):
        return self._create_note(title, description, current_state, **extra_fields)

    #Atributos
    title = models.TextField(
        'Titulo Nota',
        max_length = 20, 
        unique = False,)

    description = models.TextField(
        'Descripción',
        max_length = 40, 
        unique = False,)

    #Este no se si seria booleano o como ya que son 3 o 4 estados
    # current_state = models.?(
    #     'Estado',
    #     unique = False
    # )