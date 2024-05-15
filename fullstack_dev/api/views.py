from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import generics
from .serializers import ProfessorSerializer, StudentSerializer, ClassSerializer, DaysSerializer, ScheduleSerializer, RatingSerializer
from .models import Professor, Student, Class, Days, Schedule, Rating

# Create your views here.

class ProfessorView(generics.CreateAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class StudentView(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class ClassView(generics.CreateAPIView):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

class DaysView(generics.CreateAPIView):
    queryset = Days.objects.all()
    serializer_class = DaysSerializer

class ScheduleView(generics.CreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

class RatingView(generics.CreateAPIView):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

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
    
def get_professors(request):
    professors = Professor.objects.all()
    data=[]
    
    for professor in professors:
        data.append({
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
        })
    return JsonResponse(data, safe=False)


def get_student_data(request):
    student_id = request.GET.get('studentID')

    if student_id:
        try:
            student = Student.objects.get(studentID=student_id)
            data = {
                'studentID': student.studentID,
                'lastName': student.lastName,
                'firstName': student.firstName,
                'email': student.email,
                'username': student.username,
                'password': student.password,
                'created_at': student.created_at,
            }
            return JsonResponse(data)
        except Student.DoesNotExist:
            return JsonResponse({'error': 'Student not found'}, status=404)
    else:
        return JsonResponse({'error': 'Student ID is required'}, status=400)
    
def get_students(request):
    students = Student.objects.all()
    data=[]

    for student in students:
        data.append({
            'studentID': student.studentID,
            'lastName': student.lastName,
            'firstName': student.firstName,
            'email': student.email,
            'username': student.username,
            'password': student.password,
            'created_at': student.created_at,
        })
    return JsonResponse(data, safe=False)

def get_class_data(request):
    class_id = request.GET.get('classID')

    if class_id:
        try:
            class_obj = Class.objects.get(classID=class_id)
            data = {
                'classID': class_obj.classID,
                'className': class_obj.className,
                'professorID': class_obj.professorID_id,
                'startTime': class_obj.startTime,
                'endTime': class_obj.endTime,
                'created_at': class_obj.created_at,
            }
            return JsonResponse(data)
        except Class.DoesNotExist:
            return JsonResponse({'error': 'Class not found'}, status=404)
    else:
        return JsonResponse({'error': 'Class ID is required'}, status=400)

def get_classes(request):
    classes = Class.objects.all()
    data=[]

    for class_obj in classes:
        data.append({
            'classID': class_obj.classID,
            'className': class_obj.className,
            'professorID': class_obj.professorID_id,
            'startTime': class_obj.startTime,
            'endTime': class_obj.endTime,
            'created_at': class_obj.created_at,
        })
    return JsonResponse(data, safe=False)

def get_days_data(request):
    class_id = request.GET.get('classID')

    if class_id:
        try:
            days = Days.objects.filter(classID=class_id)
            data = [{
                'dayID': day.dayID,
                'classID': day.classID_id,
                'day': day.day,
                'created_at': day.created_at,
            } for day in days]
            return JsonResponse(data, safe=False)
        except Days.DoesNotExist:
            return JsonResponse({'error': 'Days not found'}, status=404)
    else:
        return JsonResponse({'error': 'Class ID is required'}, status=400)

def get_schedule_data(request):
    #class_id = request.GET.get('classID')
    #testing
    student_id = request.GET.get('studentID')

    if student_id:
        try:
            schedules = Schedule.objects.filter(studentID=student_id)
            data = [{
                'scheduleID': schedule.scheduleID,
                'classID': schedule.classID_id,
                'studentID': schedule.studentID_id,
                'created_at': schedule.created_at,
            } for schedule in schedules]
            return JsonResponse(data, safe=False)
        except Schedule.DoesNotExist:
            return JsonResponse({'error': 'Schedule not found'}, status=404)
    else:
        return JsonResponse({'error': 'Class ID is required'}, status=400)

def get_rating_data(request):
    class_id = request.GET.get('classID')

    if class_id:
        try:
            rating = Rating.objects.get(classID=class_id)
            data = {
                'ratingID': rating.ratingID,
                'classID': rating.classID_id,
                'studentID': rating.studentID_id,
                'rating': rating.rating,
            }
            return JsonResponse(data)
        except Rating.DoesNotExist:
            return JsonResponse({'error': 'Rating not found'}, status=404)
    else:
        return JsonResponse({'error': 'Class ID is required'}, status=400)
    
def save_rating_data(request):
    if request.method == 'POST':
        class_id = request.POST.get('classID')
        student_id = request.POST.get('studentID')
        rating_value = request.POST.get('rating')

        if class_id and student_id and rating_value:
            try:
                rating = Rating.objects.create(
                    classID_id=class_id,
                    studentID_id=student_id,
                    rating=rating_value
                )
                # Optionally, you can serialize the created rating object
                serializer = RatingSerializer(rating)
                return JsonResponse(serializer.data)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=400)
        else:
            return JsonResponse({'error': 'Class ID, Student ID, and Rating are required'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
