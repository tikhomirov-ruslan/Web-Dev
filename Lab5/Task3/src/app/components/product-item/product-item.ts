import { Component, input, output, signal } from '@angular/core';
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
  product = input.required<Product>(); 
  remove = output<number>();          

  currentImageIndex = signal(0);

  like() { this.product().likes++; }

  onDelete() { this.remove.emit(this.product().id); }

  share(platform: string) {
    const url = platform === 'wa' ? `https://wa.me/` : `https://t.me/`;
    window.open(url, '_blank');
  }
}