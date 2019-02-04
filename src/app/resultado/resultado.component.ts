import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  constructor() { }

  resultado: number;
  operadorA: number;
  operadorB: number;
  operador = 0;
  onResultado() {

    switch (this.operador) {
      case 1:
        this.resultado = this.operadorA + this.operadorB;
        break;
      case 2:
      this.resultado = this.operadorA - this.operadorB;
        break;
      case 3:
      this.resultado = this.operadorA / this.operadorB;
        break;
      case 4:
      this.resultado = this.operadorA * this.operadorB;
        break;
      default:
      this.resultado = 0;
        break;
    }
  }
  onOperador(a) {
    this.operador = a;
  }
}
