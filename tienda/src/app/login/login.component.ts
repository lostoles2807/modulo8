import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { LoginService } from 'src/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorLogin:boolean = false;
  entro: any;

  constructor(public conexion: AngularFireAuth, private router: Router, private ingresoServ:LoginService) { }
  ngOnInit() {
  }

  login(email, password) {
    /*this.conexion.auth.signInWithEmailAndPassword(email, password).then(()=>{
      this.router.navigateByUrl('/inicio');
    })
    .catch((error) => {
      this.errorLogin = true;
    })*/
   // this.ingresoServ.entrada(email);
   this.ingresoServ.entrada(email)
   .subscribe(entrada =>{
     this.entro = entrada;
     if(this.entro[0].password == password){
      this.router.navigateByUrl('/inicio');
     }
     else{
       alert('Usuario o Contraseña Incorrectos');
       this.router.navigateByUrl('/');
     }
   })
}

}
