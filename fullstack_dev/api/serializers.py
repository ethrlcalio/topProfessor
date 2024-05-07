from rest_framework import serializers
from .models import Professor

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = ('professorID', 'professorCode', 'lastName', 'firstName','program', 'division', 'schoolYear', 'email', 'username', 'password', 'position', 'created_at')