# Generated by Django 2.0.5 on 2018-09-20 14:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0004_auto_20180920_2025'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='banner',
            options={'ordering': ['-priority']},
        ),
    ]