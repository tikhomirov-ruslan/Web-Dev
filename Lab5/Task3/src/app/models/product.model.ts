// src/app/models/product.model.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;

  categoryId: number; // Связь с категорией
  likes: number;      // Новое поле
}