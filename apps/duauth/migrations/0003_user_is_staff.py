# Generated by Django 2.0.5 on 2018-09-14 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('duauth', '0002_auto_20180912_1650'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]
