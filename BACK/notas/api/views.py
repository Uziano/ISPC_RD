from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
from notas.models import Notes

from notas.api.serializer import NoteListSerializer, NoteSerializer

class NotesApiView(APIView):
    def get(self, request):
        note = Notes.objects.all().values('id', 'title', 'description', 'deadline')
        notes_serializer = NoteListSerializer(note, many=True)

        return Response(
            data = notes_serializer.data,
            status = status.HTTP_200_OK )
        
    def post(self, request):
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
    def get(self, request, pk):
        note = Notes.objects.get(pk=pk)
        notes_serializer = NoteSerializer(note)

        return Response(
            data=notes_serializer.data,
            status=status.HTTP_200_OK
        )

    def put(self, request, pk):
        """Modifica un registro"""

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
        """Elimina un registro"""

        note = Notes.objects.get(pk=pk)
        note.delete()

        return Response(
            {'message': 'Nota eliminada correctamente'},
            status=status.HTTP_200_OK
        )
