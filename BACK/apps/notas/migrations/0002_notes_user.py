# Generated by Django 4.1.4 on 2022-12-12 19:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0003_user_password'),
        ('notas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='notes',
            name='user',
            field=models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, to='usuario.user'),
        ),
    ]
