from django.db import models
from django.contrib.auth.models import BaseUserManager,PermissionsMixin

# Create your models here.
class UserManager(BaseUserManager):
    #Constructor
    def _create_user(self, username, mail, password, is_staff, is_superuser, **extra_fields):
        if not mail:
            raise ValueError('El usuario debe tener un correo electronico')
        # Elementos que un usuario debe tener si o si
        user = self.model(
            username = username,
            mail = mail,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, mail, password, **extra_fields):
        return self._create_user(username, mail, password, False, False, **extra_fields)

    def create_superuser(self, username, mail, password, **extra_fields):
        return self._create_user(username, mail, password, True, True, **extra_fields)
       

class User(models.Model):
    
    # Atributos
    mail = models.EmailField(
        max_length = 64, 
        unique = True,
        verbose_name='Correo Electrónico')
 
    username = models.CharField(
        verbose_name='Usuario',
        max_length = 32,
        unique = True,)
    
    password = models.CharField(
        verbose_name='Contraseña',
        max_length = 32,
        null=False,
        blank = False,
        default=''
    )
    
    image = models.ImageField(
        verbose_name='Imagen de perfil', 
        upload_to='perfil/', 
        max_length=255, 
        null=True, 
        blank = True)
    
    is_active = models.BooleanField(
        default = True)
    
    is_staff = models.BooleanField(
        default = False)
    
    objects = UserManager()

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    # Utilizamos el email para loguearnos
    USERNAME_FIELD = 'mail'
    
    REQUIRED_FIELDS = ['mail','username','password']
    
    def __str__(self):
        return f'{self.username}'


