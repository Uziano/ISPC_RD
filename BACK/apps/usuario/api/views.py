# Rest import
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate

# Models imports
from apps.usuario.models import User

# Serializaers imports
from apps.usuario.api.serializer import UserSerializer, UserListSerializer

# Create your views here
class UserApiView(APIView):
    def get(self, request):
        """Devuleve un listado con todos los usuarios almacenados en la Base de Datos"""

        usuarios = User.objects.all().values('id', 'username', 'mail', 'password')
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

class UserDetailApiView(APIView):
    """Vamos a obtener, modificar o eliminar un usuario a traves de su id"""

    def get(self, request, pk):
        """Retorna un listado con todos los usuarios almacenados en la Base de Datos"""

        user = User.objects.get(pk=pk)
        user_serializer = UserSerializer(user)

        return Response(
            data=user_serializer.data,
            status=status.HTTP_200_OK
        )

    def put(self, request, pk):
        """Modifica un registro"""

        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {'message': 'Usuario modificado correctamente'},
                status=status.HTTP_200_OK
            )
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        """Elimina un registro"""

        user = User.objects.get(pk=pk)
        user.delete()

        return Response(
            {'message': 'Usuario eliminado correctamente'},
            status=status.HTTP_200_OK
        )

class LoginApiView(APIView):
    def post(self,request,username,password):   
        """
        Permite verificar que el usuario exista en la Base de Datos cuando se loguea
        """
        usuarios = authenticate(request=request, username=username, password=password)
                
        if usuarios is not None:
            usuarios_serializer = UserSerializer(usuarios)
            
            return Response(
                data = usuarios_serializer.data,
                status = status.HTTP_200_OK )  

        else:
                data = {
                    "message":"Usuario o contrase??a incorrecta",
                }
                
                return Response(
                    data = data,
                    status=status.HTTP_400_BAD_REQUEST
                )
