import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { ConsultProductsComponent } from './consult-products/consult-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FindAllProductComponent } from './find-all-product/find-all-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [

  {path:'create-product', component:CreateProductComponent},
  {path:'consult-product', component:ConsultProductsComponent},
  {path:'update-product', component:UpdateProductComponent},
  {path:'findALlProduct', component:FindAllProductComponent},
  {path:'login',component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:AppComponent}, 
  {path:'buy', component:BuyComponent},
  {path : '**' , redirectTo : 'login' , pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
