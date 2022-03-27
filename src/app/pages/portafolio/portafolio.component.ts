import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ProductosIdxInterface } from 'src/app/interfaces/productos_idx.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
})
export class PortafolioComponent {

  get productos_idx(): ProductosIdxInterface[] {
    return this.productosService.productos_idx
  }

  get cargando_productos(): boolean {
    return this.productosService.cargando_productos
  }

  constructor(
    private productosService: ProductosService
  ) { }

}
