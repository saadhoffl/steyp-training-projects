# Generated by Django 5.0.7 on 2024-07-30 05:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_brand_color_stock_product_brand_product_color_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock',
            name='status',
            field=models.BooleanField(),
        ),
    ]