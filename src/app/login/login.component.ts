import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  formulario : FormGroup
  token:any


  constructor(public productService: ProductServiceService, private formBuilder: FormBuilder , private router:Router){
    this.formulario = new FormGroup({
      email : new FormControl('', [ Validators.required, ]),
      password : new FormControl('', [ Validators.required, ]),
   });
  }


  login(){
    const email = this.formulario.get("email")?.value;
    const password =  this.formulario.get("password")?.value;
    this.productService.login(email, password).subscribe({
      next: (response) => {
        this.router.navigate(['/home']);
      }, 
      error: () =>{
        console.log('ocurrió un error al hacer la petición')
      }
      
    });
    this.formulario.reset();

  }

  

}
