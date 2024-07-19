from django.db import models

class Place(models.Model):
    name = models.CharField(max_length=200)
    featured_image = models.ImageField(upload_to='/places/images')
    place = models.CharField(max_length=200)
    category = models.ForeignKey("places.Category", on_delete=models.CASCADE)
    description = models.TextField()
    is_deleted = models.BooleanField(default=False)

class Category(models.Model):
    name = models.CharField(max_length=200)