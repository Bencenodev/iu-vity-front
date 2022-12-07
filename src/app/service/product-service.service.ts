import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductoRequestDTO } from '../model/rquestProduct';
import { ProductoResponseDTO } from '../model/responseProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseURL = "http://localhost:5000/api/v1/"

  constructor(private http: HttpClient) { }

  getProduct(id: string){
    return this.http.get(this.baseURL+'producto/'+id);
  }

  saveProduct(product:ProductoRequestDTO){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(product);
    return this.http.post(this.baseURL+"producto",body,{'headers':headers});
  } 
  
  updateProduct(id: string, product:ProductoRequestDTO){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(product);
    return this.http.put(this.baseURL+"producto/"+id,body,{'headers':headers});
  }

  findAllProduct(){
    return this.http.get(this.baseURL+'productos');
  }
  
}
