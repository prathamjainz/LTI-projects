import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
  
  
@Injectable()  
  
  
export class ProductService {  
  
    private url = ""; 
  
    constructor(public http: HttpClient) {  
    }  
  
    getAllProducts(countryCode:any) {  
        this.url = 'http://localhost:49661/api/Company/getAllProducts?countryCode='+countryCode;  
        return this.http.get<any[]>(this.url);  
    }  
     
    countryInfo(productId:any) {  
        this.url = 'http://localhost:49661/api/Company/getProductCountryInformation?productId='+productId;  
        return this.http.get<any[]>(this.url);  
    }  
}  