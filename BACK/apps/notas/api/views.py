from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
from apps.notas.models import Notes
from apps.notas.api.serializer import NoteListSerializer, NoteSerializer
from apps.usuario.models import User

class NotesApiView(APIView):
    def get(self, request):
        """Devuleve un listado con todos las notas almacenados en la Base de Datos"""
        note = Notes.objects.all().values('id', 'title', 'description', 'beginning' , 'deadline', 'current_state' ,'user')
        notes_serializer = NoteListSerializer(note, many=True)

        return Response(
            data = notes_serializer.data,
            status = status.HTTP_200_OK )
        
    def post(self, request):
        """Crea una nueva nota"""
        serializer = NoteSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {'message': 'Nota creada'},
                status=status.HTTP_201_CREATED
            )

        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
class NotesDetailApiView(APIView):
    """Vamos a obtener, modificar o eliminar una nota a traves de su id"""
    def get(self, request, pk):
        """Retorna un listado con todos las notas almacenados en la Base de Datos"""
        
        note = Notes.objects.get(pk=pk)
        notes_serializer = NoteSerializer(note)

        return Response(
            data=notes_serializer.data,
            status=status.HTTP_200_OK
        )

    def put(self, request, pk):
        """Modifica una nota"""

        note = Notes.objects.get(pk=pk)
        serializer = NoteSerializer(note, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {'message': 'Nota Modificada'},
                status=status.HTTP_200_OK
            )
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        """Elimina una nota"""

        note = Notes.objects.get(pk=pk)
        note.delete()

        return Response(
            {'message': 'Nota eliminada correctamente'},
            status=status.HTTP_200_OK
        )

class NotesUserApiView(APIView):
    """Vista para ver las notas segun usuario"""
    
    def get(self, request, user):

        notes = Notes.objects.filter(user = user).all()
        notes_serializer = NoteSerializer(notes, many=True)

        if len(notes_serializer.data) == 0:

            try:
                User.objects.get(pk=user)

            except:
                data = {
                    'mensaje': 'El usuario no existe'
                }

                return Response(
                    data=data,
                    status=status.HTTP_400_BAD_REQUEST
                )


            data = {
                'mensaje': 'No hay notas registradas en este usuario'
            }

            return Response(
                data=data,
                status=status.HTTP_200_OK
            )
            
        return Response(
            data=notes_serializer.data,
            status=status.HTTP_200_OK
        )

