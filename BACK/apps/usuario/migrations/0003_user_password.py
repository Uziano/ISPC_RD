# Generated by Django 4.1.4 on 2022-12-11 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0002_user_is_active_user_is_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(default='', max_length=32, verbose_name='Contraseña'),
        ),
    ]
