# Generated by Django 4.2.13 on 2024-07-26 19:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("myvet", "0005_alter_pet_vaccines_alter_vaccine_pet"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="pet",
            name="vaccines",
        ),
        migrations.AddField(
            model_name="pet",
            name="vaccines",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="pet_vaccines",
                to="myvet.vaccine",
            ),
        ),
    ]