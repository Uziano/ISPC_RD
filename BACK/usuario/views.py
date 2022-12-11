# Rest import
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from usuario.models import User

# Serializaers imports
from usuario.serializer import UserSerializer, UserListSerializer

# Create your views here
class UserApiView(APIView):
    def get(self, request):
        """Devuleve un listado con todos los usuarios almacenados en la Base de Datos"""

        usuarios = User.objects.all().values('id', 'username', 'mail')
        usuarios_serializer = UserListSerializer(usuarios, many=True)

        return Response(
            data = usuarios_serializer.data,
            status = status.HTTP_200_OK )
        
    def post(self, request):
        """Crea un nuevo registro"""

        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {'message': 'Usuario creado correctamente'},
                status=status.HTTP_201_CREATED
            )

        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

