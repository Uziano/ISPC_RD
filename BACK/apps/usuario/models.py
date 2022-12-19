# Imports
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

# Create your models here.
class UserManager(BaseUserManager):     
    def _create_user(self, username, mail, password, is_staff, is_superuser, **extra_fields):
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

    def create_user(self, username, mail, password=None, **extra_fields):
        return self._create_user(username, mail, password,False, False, **extra_fields)

    def create_superuser(self, username, mail,  password=None, **extra_fields):
        return self._create_user(username, mail, password, True, True, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    # Atributos
    mail = models.EmailField(
        max_length = 64, 
        unique = True,
        verbose_name='Correo Electrónico')
 
    username = models.CharField(
        verbose_name='Usuario',
        max_length = 32,
        unique = True,)
    
    is_active = models.BooleanField(
        default = True)
    
    is_staff = models.BooleanField(
        default = False)
    
    objects = UserManager()

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['mail']

    def __str__(self):
        return f'{self.username}'
    





