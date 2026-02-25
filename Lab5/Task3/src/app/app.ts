import { Component, inject, signal, computed } from '@angular/core';
import { ProductService } from './services/product.service';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  private productService = inject(ProductService);

  categories = this.productService.categories;
  selectedCategoryId = signal<number | null>(null);

  // Фильтрация - computed signal
  filteredProducts = computed(() => {
    const id = this.selectedCategoryId();
    return this.productService.getProducts()().filter(p => p.categoryId === id);
  });

  selectCategory(id: number) { this.selectedCategoryId.set(id); }
  handleDelete(id: number) { this.productService.deleteProduct(id); }
}
