from django.urls import path
from .views import ProfessorView
from . import views

urlpatterns = [
    path('', ProfessorView.as_view()),
    path('api/professor-data/', views.get_professor_data, name='professor_data'),
]