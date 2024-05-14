from django.shortcuts import render
from rest_framework import generics
from .serializers import ProfessorSerializer
from .models import Professor

# Create your views here.

class ProfessorView(generics.CreateAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class ProfessorListView(generics.ListAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer