import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoInterface } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  get producto(): ProductoInterface{
    return this.productosService.producto
  }

  productoId : string = ''

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params
      .subscribe( ({ id }) => {
        this.productoId = id
        console.log( `assets/productos/${ id }/pic1.jpg`)
        this.productosService.cargarProducto( id )
      })
  }

}
