# Generated by Django 4.2.13 on 2024-07-28 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myvet", "0006_alter_client_dni_alter_client_last_login_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="client",
            name="pub_date",
            field=models.DateTimeField(verbose_name="Date Published"),
        ),
    ]
