import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoEquipo } from '../../interfaces/info-equipo.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  get equipo(): InfoEquipo[] {
    return this.infoPaginaService.equipo
  }

  constructor(
    private infoPaginaService: InfoPaginaService
  ) { }

  ngOnInit(): void {
  }

}
