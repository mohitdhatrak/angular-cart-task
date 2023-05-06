import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: any;

  constructor() {}

  getDiscountedPrice(price: any, percentDiscount: any) {
    return (price * (100 - percentDiscount)) / 100;
  }
}
