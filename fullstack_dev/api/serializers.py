from rest_framework import serializers
from .models import Professor

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = ('professorID', 'lastName', 'firstName', 'email', 'username', 'password', 'position', 'created_at')