from django.db import models

class Product(models.Model):
    product_title = models.CharField(max_length=255)
    product_img = models.ImageField("/products/images/")
    product_price = models.FloatField()
    category = models.ForeignKey("products.Category", on_delete=models.CASCADE)

    class meta:
        db_table = "products"

    def __str__(self):
        return self.product_title    
    
class Category(models.Model):
    category_title = models.CharField(max_length=255)

    class meta:
        db_table = "categories"

    def __str__(self):
        return self.category_title


class ByColor(models.Model):
    product = models.ForeignKey("products.Product", on_delete=models.CASCADE)
    color = models.CharField(max_length=255)

    class meta:
        db_table = "by_color"

    def __str__(self):
        return self.color


class ByBrand(models.Model):
    product = models.ForeignKey("products.Product", on_delete=models.CASCADE)
    brand = models.CharField(max_length=255)

    class meta:
        db_table = "by_brand"

    def __str__(self):
        return self.brand
    

class ByProductStatus(models.Model):
    product = models.ForeignKey("products.Product", on_delete=models.CASCADE)
    product_status = models.CharField(max_length=255)

    class meta:
        db_table = "by_product_status"

    def __str__(self):
        return self.product_status