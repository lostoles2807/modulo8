import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { database } from 'firebase';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';


export interface entrada { email:string; password:string; direccion:string; telefono:string; nombre:string};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginCollection: AngularFirestoreCollection<entrada>
  private entradaCollection: AngularFirestoreDocument<entrada>
  entro:Observable<entrada[]>;
  usuario:any;
  
  constructor(private entraService: AngularFirestore){
  this.loginCollection = this.entraService.collection<entrada>('usuarios');
  this.entro = this.loginCollection.valueChanges()
  }

  usuarios(){
    return this.entro;
  }

  entrada(email:string){
    const login = this.entraService.collection<entrada>('usuarios', ref => ref.where('email', '==', `${email}`))
    .valueChanges();
    return login;
  
  }
}
