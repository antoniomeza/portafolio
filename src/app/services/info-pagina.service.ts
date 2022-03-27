import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}
  cargada: boolean = false
  equipo: InfoEquipo[] = []
  equipoCargado: boolean = false
  
  constructor( private http: HttpClient ) {
    this._cargarInfoJson()
    this._cargarEquipo()
  }

  private _cargarInfoJson() {
    this.http.get<InfoPagina>("../assets/data/data-pagina.json")
      .subscribe({
        next: ( (json: InfoPagina) => {
          this.info = json
          this.cargada = true
        })
      })
  }

  private _cargarEquipo() {
    this.http.get<InfoEquipo[]>("https://fit-page-default-rtdb.firebaseio.com/equipo.json")
      .subscribe({
        next: ( ( equipoJson: InfoEquipo[]) => {
          this.equipo = equipoJson
          this.equipoCargado = true
        })
      })
  }
}
