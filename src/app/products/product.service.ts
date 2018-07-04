import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {catchError, map, tap} from "rxjs/operators";
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";

import {Product} from "./product";
import {throwError} from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map((data) => {
          return data
        }),
        //   tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  addProduct(product:Product):Observable<Product>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
   return this.http.post<Product>(this.productsUrl ,product,{headers})
     .pipe(
       tap(data => console.log('createProduct: ' + JSON.stringify(data))),
       catchError(this.handleError)
     );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
