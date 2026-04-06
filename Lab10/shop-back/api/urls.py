from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from django.urls import path
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

# router = DefaultRouter()
# router.register(r'categories', views.CategoryViewSet)
# router.register(r'products', views.ProductViewSet)

urlpatterns = [
    # path('', include(router.urls)),

    # Products
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),
    
    # Categories
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),
]