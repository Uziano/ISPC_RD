from django.db import models

# Import Models
from apps.usuario.models import User

# Create your models here.
class Notes(models.Model):
    ESTADOS_TAREA = (
        ('1', 'Por hacer'),
        ('2', 'Haciendo'),
        ('3', 'Terminado'),
    )
    def _create_note(self, title, description, current_state, deadline, **extra_fields):
        note = self.model(
            title = title,
            description = description,
            current_state = current_state,
            deadline = deadline,
            **extra_fields
        )
        note.set_title(title)
        note.save(using=self.db)
        return note

    def create_note(self, title, description, current_state, deadline, **extra_fields):
        return self._create_note(title, description, current_state, deadline, **extra_fields)

    #Atributos
    user = models.ForeignKey(
        User,
        null=True,
        on_delete=models.CASCADE
    )
    title = models.CharField(
        'Titulo Nota',
        max_length = 20, 
        unique = False,
    )
    description = models.CharField(
        'Descripción',
        max_length = 250, 
        unique = False,
    )
    current_state = models.CharField(
        'Estados',
        max_length=1,
        choices=ESTADOS_TAREA
    )
    deadline = models.DateTimeField(
        'Fecha de finalización',
        auto_now=False,
        auto_now_add=True
    )
