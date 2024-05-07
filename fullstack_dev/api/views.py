from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics
from .serializers import ProfessorSerializer
from .models import Professor

# Create your views here.

class ProfessorView(generics.CreateAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

def get_professor_data(request):
    professor_code = request.GET.get('professorCode')

    if professor_code:
        try:
            professor = Professor.objects.get(professorCode=professor_code)
            data = {
                'professorID': professor.professorID,
                'professorCode': professor.professorCode,
                'lastName': professor.lastName,
                'firstName': professor.firstName,
                'program': professor.program,
                'division': professor.division,
                'schoolYear': professor.schoolYear,
                'email': professor.email,
                'username': professor.username,
                'password': professor.password,
                'position': professor.position,
                'created_at': professor.created_at,
            }
            return JsonResponse(data)
        except Professor.DoesNotExist:
            return JsonResponse({'error': 'Professor not found'}, status=404)
    else:
        return JsonResponse({'error': 'Professor code is required'}, status=400)