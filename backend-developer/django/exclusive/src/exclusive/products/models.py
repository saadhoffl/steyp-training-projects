from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        db_table = "category"
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

class SubCategory(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')

    class Meta:
        db_table = "subcategory"
        verbose_name_plural = 'subcategories'

    def __str__(self):
        return f"{self.name} (in {self.category.name})"

class Color(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        db_table = "color"
        verbose_name_plural = 'colors'

    def __str__(self):
        return self.name

class Brand(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        db_table = "brand"
        verbose_name_plural = 'brands'

    def __str__(self):
        return self.name

class Stock(models.Model):
    is_in_stock = models.BooleanField()

    class Meta:
        db_table = "stock"
        verbose_name_plural = 'stocks'

    def __str__(self):
        return str(self.is_in_stock)

class Product(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to="products/images/")
    price = models.FloatField()
    description = models.TextField()  # Fixed typo here
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, null=True, blank=True)
    color = models.ForeignKey(Color, on_delete=models.SET_NULL, null=True, blank=True)
    brand = models.ForeignKey(Brand, on_delete=models.SET_NULL, null=True, blank=True)
    stock = models.ForeignKey(Stock, on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        db_table = "products"

    def __str__(self):
        return self.name
