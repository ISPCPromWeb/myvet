# Generated by Django 4.2.13 on 2024-07-28 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myvet", "0004_alter_client_password"),
    ]

    operations = [
        migrations.AddField(
            model_name="client",
            name="last_login",
            field=models.DateTimeField(null=True, verbose_name="Last Login"),
        ),
    ]
