# Generated by Django 5.0.7 on 2024-07-29 09:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('color', models.CharField(max_length=200)),
                ('in_stock', models.BooleanField()),
                ('brand', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name_plural': 'categories',
                'db_table': 'category',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='', verbose_name='/products/images/')),
                ('price', models.FloatField()),
                ('descrption', models.TextField()),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.category')),
            ],
        ),
    ]
