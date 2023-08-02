import { Component, OnInit } from '@angular/core';  
import { ProductService } from './product.service';  
  
@Component({  
  selector: 'app-product',  
  templateUrl: './product.component.html',  
  styleUrls: ['./product.component.css']  
})  
export class ProductsComponent implements OnInit {  
  
  products = [];  
  countryCode: any;  
  currencySymbol:any;  
  productCountryInformation: any = [];  
  hideme = [];  
  Index: any;  
  countryId: any;  
  country: any;  
  priceToDisplay=[];  
  
  constructor(private _productService: ProductService) {  
  }  
  ngOnInit() {  
  
    this.countryId=0;  
    this.getProducts(this.countryId);  
  }  
  
  public getProducts(countryId:string) {  
    let data = [];  
    this._productService.getAllProducts(countryId).subscribe((data: any) => {  
      this.products =data;  
        
    })  
  
  }  
  public showProductCountryInfo(index:any,productId:any) {  
    this._productService.countryInfo(productId).subscribe((res:any)=>{  
      this.productCountryInformation[index] = res;  
    })  
    this.hideme[index] !=this.hideme[index];  
    this.Index = index;  
  }  
  
}  