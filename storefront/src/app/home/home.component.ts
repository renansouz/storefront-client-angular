import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private productsServive: ProductsService
  ) { }

  ngOnInit() {
    this.productsServive.getProducts('http://localhost:3000/clothes', {page: 0, perPage: 5}).subscribe((products: Products) => {
      console.log(products.items);
    })
  }
}
