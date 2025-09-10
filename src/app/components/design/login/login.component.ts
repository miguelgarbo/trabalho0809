import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router = inject(Router)

  email!:string;
  password!:string;

  logar(){
    if (this.email == 'root' && this.password=='root'){
      console.log("oi")
        this.router.navigate(['principal/pessoas'])

    }else{
      alert("Email Ou Senha estão incorretos")
    }
  }


}
