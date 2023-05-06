import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-cart-task';

  allProducts: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http
      .get('http://localhost:4200/assets/product-data.json')
      .subscribe((products) => {
        this.allProducts = products;
        console.log(this.allProducts);
      });
  }
}
