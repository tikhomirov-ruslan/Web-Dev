from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category

# Helper to serialize a single product
def serialize_product(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': {
            'id': product.category.id,
            'name': product.category.name
        }
    }

# Helper to serialize a single category
def serialize_category(category):
    return {
        'id': category.id,
        'name': category.name
    }

# /api/products/
def product_list(request):
    products = Product.objects.all()
    data = [serialize_product(p) for p in products]
    return JsonResponse(data, safe=False)

# /api/products/<id>/
def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(serialize_product(product))

# /api/categories/
def category_list(request):
    categories = Category.objects.all()
    data = [serialize_category(c) for c in categories]
    return JsonResponse(data, safe=False)

# /api/categories/<id>/
def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(serialize_category(category))

# /api/categories/<id>/products/
def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = category.products.all()  # using related_name='products'
    data = [serialize_product(p) for p in products]
    return JsonResponse(data, safe=False)
