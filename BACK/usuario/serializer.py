# Rest imports
from rest_framework import serializers

# Models
from usuario.models import User

# Serializer
class UserSerializer(serializers.ModelSerializer):  
    class Meta:
        model = User
        fields = '__all__'
        
class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def to_representation(self, instance):
        return {
            'id': instance['id'],
            'username': instance['username'],
            'mail': instance['mail'],
            'password': instance['password']
        }
