import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdxInterface } from '../interfaces/productos_idx.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando_productos: boolean = true

  productos_idx: ProductosIdxInterface[] = []

  constructor(
    private http: HttpClient
  ) {
    this._cargarProductos()
  }
  
  private _cargarProductos() {
    this.http.get<ProductosIdxInterface[]>("https://fit-page-default-rtdb.firebaseio.com/productos_idx.json")
      .subscribe({
        next: ( ( productos_idx: ProductosIdxInterface[]) => {
          this.productos_idx = productos_idx
          this.cargando_productos = false
        })
      })
  }
}
