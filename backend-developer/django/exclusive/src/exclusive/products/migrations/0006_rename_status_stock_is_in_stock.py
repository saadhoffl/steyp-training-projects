# Generated by Django 5.0.7 on 2024-07-30 05:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_stock_status'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stock',
            old_name='status',
            new_name='is_in_stock',
        ),
    ]