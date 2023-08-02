import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()


export class ProductsService {

    private url = "";
    private baseUrl = "";

    constructor(public http: HttpClient) {
    }

    getAllProducts(countryCode) {
        this.url = 'http://localhost:49661/api/Company/getAllProducts?countryCode='+countryCode;
        return this.http.get<any[]>(this.url);
    }
   
    countryInfo(productId) {
        this.url = 'http://localhost:49661/api/Company/getProductCountryInformation?productId='+productId;
        return this.http.get<any[]>(this.url);
    }
}
