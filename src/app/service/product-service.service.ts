import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductoRequestDTO } from '../model/rquestProduct';
import { url_base } from '../constants/constants';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

   k:string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb2Jzb25jb2wxOTQ3QGdtYWlsLmNvbSIsImV4cCI6MTY3NDA2MzkwMX0.aCAnrVCjgnOD_A_P0tOUF-dY9DqmqRq5yC5ZwB3zg04';


  constructor(private http: HttpClient) { }

  getProduct(id: string){
    const headers = { 'Authorization':this.k};
    return this.http.get(url_base+'producto/'+id,{'headers':headers});
  }

  saveProduct(product:ProductoRequestDTO){
    const headers = { 'content-type': 'application/json','Authorization':this.k};
  
    const body=JSON.stringify(product);
    return this.http.post(url_base+"producto",body,{'headers':headers});
  } 
  
  updateProduct(id: string, product:ProductoRequestDTO){
    const headers = { 'content-type': 'application/json','Authorization':this.k};
    const body=JSON.stringify(product);
    return this.http.put(url_base+"producto/"+id,body,{'headers':headers});
  }

  findAllProduct(){
    const headers = { 'Authorization':this.k};
    return this.http.get(url_base+'productos',{'headers':headers});
  }

  login(email:string, password:string){
    const headers = { 'content-type': 'application/json'}
    const body = {"email":email,"password":password}
    return this.http.post("http://localhost:5000/login",body,{'headers':headers}) 
  }

  addCar(){

    
  }

  
}
