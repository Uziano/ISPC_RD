# Generated by Django 4.1.4 on 2022-12-16 19:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0005_user_is_staff'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='image',
        ),
    ]