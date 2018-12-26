import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
//Get data asynchronously with Observable
import { Observable } from 'rxjs';
import { Product } from 'src/entities/product.entity';





@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_URL: string = 'https://localhost:44336/api/product/';

  constructor( 
    private http: HttpClient,
    ) { }

  //get data asynchronously with Observable won't delay in process loadata to server, it is only effective when database is large and processing is big.
  // this function is get all data.  
  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.BASE_URL + "findall")             
  }

  // this function is only get a object product based on its id.
  find(id: string): Observable<Product>{
    return this.http.get<Product>(this.BASE_URL + "find/" + id)            
  }

  // this function is create a object product.
  create(product: Product): Observable<Product[]>{
    return this.http.post<Product[]>(this.BASE_URL + "create", product)             
  }

  // this function is update a available object product
  update(product: Product): Observable<Product[]>{
    return this.http.put<Product[]>(this.BASE_URL + "update", product)             
  }

  // thí function is delete a object product based on its id
  delete(id: string): Observable<Product[]>{
    return this.http.delete<Product[]>(this.BASE_URL + "delete/" + id)             
  }

}
