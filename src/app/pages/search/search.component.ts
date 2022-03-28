import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosIdxInterface } from 'src/app/interfaces/productos_idx.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  get productos_filtrados(): ProductosIdxInterface[] {
    return this.productosService.productos_filtrados
  }

  get cargando_productos(): boolean {
    return this.productosService.cargando_productos
  }


  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe( ({ texto }) => {
        this.productosService.buscarProducto( texto )
      })
  }

}
