# Generated by Django 4.1.4 on 2022-12-11 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=20, verbose_name='Titulo Nota')),
                ('description', models.CharField(max_length=40, verbose_name='Descripción')),
                ('current_state', models.CharField(choices=[('1', 'Por hacer'), ('2', 'Haciendo'), ('3', 'Terminado')], max_length=1, verbose_name='Estados')),
                ('deadline', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de finalización')),
            ],
        ),
    ]
