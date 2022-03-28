import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosIdxInterface } from '../interfaces/productos_idx.interface';
import { ProductoInterface } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando_productos: boolean = true
  cargando_producto:  boolean = true

  productos_idx: ProductosIdxInterface[] = []

  producto : ProductoInterface = {}

  productos_filtrados: ProductosIdxInterface[] = []

  constructor(
    private http: HttpClient
  ) {
    this._cargarProductos()
  }
  
  private _cargarProductos() {
    return new Promise<void>( ( resolve, rejects ) =>{
      this.http.get<ProductosIdxInterface[]>("https://fit-page-default-rtdb.firebaseio.com/productos_idx.json")
        .subscribe({
          next: ( ( productos_idx: ProductosIdxInterface[]) => {
            this.productos_idx = productos_idx
            this.cargando_productos = false
            resolve()
          })
        })
    })
  }

  cargarProducto<ProductoInterface>( id: string) {
    this.http.get<ProductoInterface>(`https://fit-page-default-rtdb.firebaseio.com/productos/${ id }.json`)
      .subscribe({
        next: ( ( producto: ProductoInterface) => {
          this.producto = producto
          this.cargando_producto = false
        })
      })
  }

  buscarProducto( texto : string ) {

    if ( this.productos_idx.length === 0) {
      this._cargarProductos().then( () => {
        this._filtrarProductos( texto )
      })
    } else {
      this._filtrarProductos( texto )
    }

  }
  
  private _filtrarProductos( texto: string ) {
    texto = texto.toLocaleLowerCase()
    this.productos_filtrados = []
    this.productos_idx.forEach( prod => {
      const tituloLower = prod.titulo!.toLocaleLowerCase()
      const categoriaLower = prod.categoria!.toLocaleLowerCase()
      if ( categoriaLower.indexOf( texto ) >= 0 
          || tituloLower.indexOf( texto ) >= 0 ) {
        this.productos_filtrados.push( prod )
      }
    } )
    
  }
}
