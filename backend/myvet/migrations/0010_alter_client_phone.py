# Generated by Django 4.2.13 on 2024-08-03 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myvet", "0009_remove_client_is_active_client_level_client_phone_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="client",
            name="phone",
            field=models.CharField(default=""),
        ),
    ]
