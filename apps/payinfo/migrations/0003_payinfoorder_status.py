# Generated by Django 2.0.5 on 2018-09-27 08:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payinfo', '0002_payinfoorder'),
    ]

    operations = [
        migrations.AddField(
            model_name='payinfoorder',
            name='status',
            field=models.SmallIntegerField(default=1),
        ),
    ]
