import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  @Input() allProducts: any;

  constructor() {}

  // allProducts: any;

  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.getProducts();
  // }

  // getProducts() {
  //   this.http
  //     .get('http://localhost:4200/assets/product-data.json')
  //     .subscribe((products) => {
  //       this.allProducts = products;
  //     });
  //   console.log(this.allProducts);
  // }
}
