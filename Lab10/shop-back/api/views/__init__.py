# api/views/__init__.py
# Switch between implementations by changing the import below

# from .fbv import product_list, product_detail              # Level 2
# from .cbv import ProductListAPIView, ProductDetailAPIView  # Level 3
# from .mixins import ProductListAPIView, ProductDetailAPIView # Level 4
from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)