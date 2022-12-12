#Rest imports 
from rest_framework import serializers
from apps.notas.models import Notes

class NoteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Notes
        fields = '__all__'

class NoteListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = '__all__'
    
    #Basado en el modelo de notas
    def to_representation(self, instance):
        return {
            'id': instance['id'],
            'title': instance['title'],
            'description': instance['description'],
            'deadline': instance['deadline'],
        }
