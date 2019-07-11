import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/servicios/tienda.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  unproducto:any;

  constructor(private detaserv:TiendaService, private ruta:ActivatedRoute) { 
   this.ruta.params.subscribe(paramet =>{
     this.detaserv.getproducto(paramet['id'])
     .subscribe(resp=>{
      // console.log(resp);
       this.unproducto = resp;
     })
   })

  }

  ngOnInit() {

  }
  

}
