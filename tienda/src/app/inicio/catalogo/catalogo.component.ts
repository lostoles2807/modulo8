import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/servicios/tienda.service';
import { LoginService } from 'src/servicios/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos: any;
  formulario:any ={
  nombre:'',
  precio:'',
  cantidad:'',
  subtotal:''
  };

  forma:any ={
    nombre:'',
    precio:'',
    unidades:'',
    }
  

  constructor(private cataloogo: TiendaService, private router:Router, private loginserv:LoginService) { 
    this.cataloogo.listaproductos().subscribe(frutas=>{
      //console.log(frutas);
      this.productos = frutas;
    })
    return this.productos;
  }
  ngOnInit() {
    
  }

  agregar(a:string,b:number, c:number, d:number, idt:any){
    this.formulario.nombre= a;
    this.formulario.precio = b;
    this.formulario.cantidad=c;
    this.formulario.subtotal = b * c;
   // console.log(this.formulario);
    this.cataloogo.agregarcarrito(this.formulario)
    alert('Producto Agregado A su Carrito de Compras');
    this.forma.nombre =a;
    this.forma.precio =b;
    this.forma.unidades = d - c;
    this.cataloogo.editarprod(this.forma, idt)
    c = 0;
  }

  buscar(item:string){
    console.log(item);
    this.cataloogo.busqueda(item)
   .subscribe(aa=>{
     console.log(aa)
   })
    this.router.navigateByUrl('/inicio/Busqueda');
  }


}
