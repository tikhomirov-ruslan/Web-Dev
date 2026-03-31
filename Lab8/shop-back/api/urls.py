from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.product_list, name='product-list'),
    path('products/<int:id>/', views.product_detail, name='product-detail'),
    path('categories/', views.category_list, name='category-list'),
    path('categories/<int:id>/', views.category_detail, name='category-detail'),
    path('categories/<int:id>/products/', views.category_products, name='category-products'),
]