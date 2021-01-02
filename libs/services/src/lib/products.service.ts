import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@sernanp/models'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  error = false;
  url = 'https://gorest.co.in/public-api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {    
    return this.http.get<Product[]>(this.url);
  }
}
