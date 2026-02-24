import { Component, input, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  // Signal-based input (Angular 17.1+)
  product = input.required<Product>();
  
  // Сигнал для текущего изображения в галерее
  currentImageIndex = signal(0);

  changeImage(index: number) {
    this.currentImageIndex.set(index);
  }

  shareOnWhatsApp() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(`Посмотри на этот товар: ${this.product().name}`);
    window.open(`https://wa.me/`, '_blank');
  }

  shareOnTelegram() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/`, '_blank');
  }
}