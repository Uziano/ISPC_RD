# Generated by Django 4.1.4 on 2022-12-12 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notas', '0005_alter_notes_deadline_alter_notes_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='deadline',
            field=models.DateField(verbose_name='Fecha de finalización'),
        ),
    ]
