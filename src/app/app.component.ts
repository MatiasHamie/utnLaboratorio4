import { Component } from '@angular/core';
import { Usuario } from "./usuario";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';
  public edadUno: number;
  public edadDos: number;
  public sumaEdades: number;
  public promedioEdades: number;

  constructor() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.sumaEdades = 0;
    this.promedioEdades = 0;
  }

  mostrarResultados(){
    console.log(this.edadUno + ' ' + this.edadDos);
    this.sumaEdades = this.edadUno + this.edadDos;
    this.promedioEdades = this.sumaEdades / 2;
  }

  limpiarCampos(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.sumaEdades = 0;
    this.promedioEdades = 0;
  }
}


