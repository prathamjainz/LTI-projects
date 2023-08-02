import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  countryCode: any;
  currencySymbol: any;
  productCountryInformation: any = [];
  hideme = [];
  Index: any;
  countryId: any;
  country: any;
  priceToDisplay = [];

  constructor(private _productService: ProductsService) {
  }
  ngOnInit() {

    this.countryId = 0;
    this.getProducts(this.countryId);
  }

  public getProducts(countryId) {
    let data = [];
    this._productService.getAllProducts(countryId).subscribe((data: any) => {
      this.products = data;

    })

  }
  public showProductCountryInfo(index, productId) {
    this._productService.countryInfo(productId).subscribe((res: any) => {
      this.productCountryInformation[index] = res;
    })
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

}
