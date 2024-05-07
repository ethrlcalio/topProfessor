Database: PostgreSQL
Web Framework: Django REST
Frontend: React

**Dependencies**:
- **NodeJS** --> https://nodejs.org/en/download/current
- **Python** --> https://www.python.org/downloads/
- **PostgreSQL** --> https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

**Controls**:
- **Start(Backend)**: ``python .\manage.py runserver``
- **Start(Frontend)**: ``npm run dev``
- **End**: ``CTRL + C``

**Notes**:
- When installing django, it might me useful to use the ``--user`` keyword: pip install --user djangorestframework
- If django-admin is not recognized due to not being in PATH, ``python -m django`` may be used
- 

**Commands**:
- ``python manage.py makemigrations`` --> check if there are migrations need for the models in django (./api/models.py)
- ``python manage.py migrate`` --> migrate changes for the models in django