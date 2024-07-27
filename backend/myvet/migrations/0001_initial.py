# Generated by Django 4.2.13 on 2024-07-23 00:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('breed', models.CharField(default='', max_length=200)),
                ('age', models.IntegerField(default=100)),
                ('vaccines', models.JSONField()),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
            ],
        ),
        migrations.CreateModel(
            name='PetType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='ProductType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='UserType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('dni', models.IntegerField(max_length=8)),
                ('adress', models.CharField(default='', max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(default=8, max_length=8)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('pet', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='myvet.pet')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myvet.usertype')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=200)),
                ('quantity', models.IntegerField()),
                ('price', models.IntegerField(default=100)),
                ('img', models.CharField(default=10)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
                ('pet_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myvet.pettype')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myvet.producttype')),
            ],
        ),
        migrations.AddField(
            model_name='pet',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myvet.pettype'),
        ),
    ]
