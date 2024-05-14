from rest_framework import serializers
from .models import Professor, Student, Class, Days, Schedule, Rating
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ('id', 'username', 'email')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = ('professorID', 'professorCode', 'lastName', 'firstName','program', 'division', 'schoolYear', 'email', 'username', 'password', 'position', 'created_at')

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('studentID', 'lastName', 'firstName', 'email', 'username', 'password', 'created_at')

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ('classID', 'className', 'professorID', 'startTime', 'endTime', 'created_at')

class DaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Days
        fields = ('dayID', 'classID', 'day', 'created_at')

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ('scheduleID', 'classID', 'studentID', 'created_at')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('ratingID', 'classID', 'studentID', 'rating')