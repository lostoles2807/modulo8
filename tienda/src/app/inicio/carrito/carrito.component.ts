import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/servicios/tienda.service';
import { NgForOf } from '@angular/common';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

compra:any;
compra1:any;
totalizar:number = 0;

formulario2:any ={
  nombre:'',
  precio:'',
  cantidad:'',
  subtotal:''
  }
  
  constructor(private carserv:TiendaService) { 
    this.carserv.getCarrito()
    .subscribe(car=>{
      this.compra=car;
      //console.log(this.compra);
      for (let index = 0; index < this.compra.length; index++) {
      this.totalizar = this.totalizar + this.compra[index].subtotal;
      //console.log(this.totalizar);
      }
    });
    return (this.compra);
  }

  borrar(id:any){
    this.carserv.borrarticulo(id);
    this.totalizar = 0;
  }

  editar(a:string,b:number,c:number, idt:any){
    console.log(a,b,c);
    this.formulario2.nombre = a;
    this.formulario2.precio = b;
    this.formulario2.cantidad = c;
    this.formulario2.subtotal = b * c;
    console.log(this.formulario2);
    this.carserv.editarticulo(this.formulario2, idt);
    this.totalizar = 0;
  }

  comprar(compra){
    console.log(compra);
    for (let index = 0; index < this.compra.length; index++) {
      this.carserv.micompra(compra[index]);
      this.borrar(compra[index].id);
    }
      alert('Compra Realizada Exitosamente');
  }

  ngOnInit() {
    
  }
}
