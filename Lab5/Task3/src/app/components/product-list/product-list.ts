import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItem } from '../product-item/product-item';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
  products = input<Product[]>([]);
  removeProduct = output<number>();
}