from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField("/products/images/")
    price = models.FloatField()
    descrption = models.TextField()
    category = models.ForeignKey("products.Category", on_delete=models.CASCADE)

    class meta:
        db_table = "products"

    def __str__(self):
        return self.name   


class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        db_table = "category"
        verbose_name_plural = 'categories'

    def __str__ (self):
        return self.name