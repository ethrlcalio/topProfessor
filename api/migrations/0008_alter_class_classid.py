# Generated by Django 5.0.4 on 2024-05-07 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_class_classid_alter_days_dayid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='classID',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]
