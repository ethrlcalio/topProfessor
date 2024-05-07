from rest_framework import serializers
from .models import Professor, Student, Class, Days, Schedule, Rating

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