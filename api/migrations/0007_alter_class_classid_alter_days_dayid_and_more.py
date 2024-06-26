# Generated by Django 5.0.4 on 2024-05-07 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_professor_professorcode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='classID',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='days',
            name='dayID',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='rating',
            name='ratingID',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='scheduleID',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='student',
            name='studentID',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
