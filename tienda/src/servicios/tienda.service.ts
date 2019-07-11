import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


export interface Item { nombre:string; precio:number};
export interface carrito{ nombre:string; precio:number; cantidad:number; subtotal:number};
export interface comprar{ nombre:string; precio:number; cantidad:number; subtotal:number}

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private catalogoCollection: AngularFirestoreCollection<Item>;
  private carritoCollection: AngularFirestoreCollection<carrito>;
  private compraCollection: AngularFirestoreCollection<comprar>;
  private itemdocumento: AngularFirestoreDocument<Item>;

  items: Observable<Item[]>;
  carrito:Observable<carrito[]>;
  compras:Observable<comprar[]>;
  totalidad:number = 0;

  constructor(private catal: AngularFirestore) { 
    this.catalogoCollection = catal.collection<Item>('productos');
    this.items = this.catalogoCollection.snapshotChanges().pipe(map(accion =>{
      return accion.map(a =>{
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id
        return{id, ...data};
      }); 
    }));
    
  }

  listaproductos(){
    return this.items;
  }

  getproducto(ident:string){
    this.itemdocumento = this.catal.doc<Item>(`productos/${ident}`);
    return this.itemdocumento.valueChanges();
    
  }

  agregarcarrito(item: carrito){
    const agregar = this.catal.collection<carrito>('carrito');
    agregar.add(item)
  }

  getCarrito(){
    this.carritoCollection=this.catal.collection<carrito>('carrito');
    this.carrito = this.carritoCollection.snapshotChanges().pipe(map(accion =>{
      return accion.map(a =>{
        const datos = a.payload.doc.data() as carrito;
        const id = a.payload.doc.id
        return{id, ...datos};
      }); 
    }));
    return this.carrito;
  }

  borrarticulo(id:any){
    this.itemdocumento = this.catal.doc<Item>(`carrito/${id}`);
   this.itemdocumento.delete()
  }

  editarticulo(formulario, idt:any){
    this.itemdocumento = this.catal.doc<Item>(`carrito/${idt}`);
   this.itemdocumento.update(formulario);
  }

  editarprod(forma, idt){
    console.log(forma, idt);
    this.itemdocumento = this.catal.doc<Item>(`productos/${idt}`);
    this.itemdocumento.update(forma);
  }

  totalprod(){
    this.carritoCollection=this.catal.collection<carrito>('carrito');
    this.carritoCollection.valueChanges().subscribe(total=>{
      this.totalidad = this.totalidad + total.length;
      return this.totalidad
    })
  }

    busqueda(nombre:any){
      console.log(nombre);
      const busco = this.catal.collection<Item>('productos', ref => ref.where('nombre','==',`${nombre}`))
      .valueChanges();
      console.log(busco);
      return busco;
    }

  micompra(compra: comprar){
    console.log(compra)
    const yocompro = this.catal.collection<comprar>('ventas');
    console.log(yocompro);
    yocompro.add(compra);
  }

  
}
