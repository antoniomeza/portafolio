import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  get dataPage(): InfoPagina {
    return this.infoPaginaService.info
  }

  constructor( 
    private infoPaginaService: InfoPaginaService,
    private router: Router
     ) {}

  buscarProducto( texto: string ) {
    if( texto.length < 1 ){
      return
    }
    this.router.navigate([ '/search', texto ])
  }
}
