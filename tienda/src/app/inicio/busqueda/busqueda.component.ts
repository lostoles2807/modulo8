import { Component, OnInit } from '@angular/core';
import { TiendaService } from 'src/servicios/tienda.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  prodt:any;
  constructor(private buscaService: TiendaService, private ruta:ActivatedRoute) {  
    this.ruta.params.subscribe(paramet =>{
      this.buscaService.busqueda(paramet['producto'])
      //console.log(paramet['producto'])
     .subscribe(aa=>{
       console.log(aa);
       this.prodt =  aa;
      })
    })
  }

  ngOnInit() {
  }

  

}
