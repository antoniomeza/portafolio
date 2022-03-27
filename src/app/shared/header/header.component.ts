import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  get dataPage(): InfoPagina {
    return this.infoPaginaService.info
  }

  constructor( private infoPaginaService: InfoPaginaService ) {}

}
