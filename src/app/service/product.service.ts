import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${environment.serviceUrl}/product`
  constructor(private http: HttpClient) { }

  getProductById(id: any) {
    console.log(id);
    let getUrl = `${this.url}/${id}`;
    console.log(getUrl);
    return this.http.get<any>(getUrl);
  }
  getProducts(): any {
    console.log(this.url);
    return this.http.get<any>(this.url);
  }

  addProduct(product: any) {
    return this.http.post<any>(this.url, product)
      .pipe(map((res) => {
        return res;
      }));
  }

  updateProduct(id: any, product: any) {
    let putUrl = `${this.url}/${id}`;
    console.log(putUrl);
    return this.http.put<any>(putUrl, product)
      .pipe(map((res) => {
        return res;
      }));
  }

  addReview(id: any, review: any) {
    let patchUrl = `${this.url}/${id}`;
    return this.http.patch<any>(patchUrl, review)
      .pipe(map((res) => {
        return res;
      }));
  }
  deleteProduct(id: any){
    let deleteUrl = `${this.url}/${id}`;
    return this.http.delete<any>(deleteUrl);
  }
}
