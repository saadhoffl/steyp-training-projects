from django.contrib import admin
from .models import Place, Category, Gallery

class GalleryAdmin(admin.TabularInline):
    list_display = ('place', 'image')
    model = Gallery


class placeAdmin(admin.ModelAdmin):
    list_display = ('name', 'place', 'category')

    inlines = [GalleryAdmin]

admin.site.register(Place, placeAdmin)


admin.site.register(Category)




