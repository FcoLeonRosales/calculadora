import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  operadorA: number;
  operadorB: number;
  operador = 0;
  resultado: number;

  //Enviar el resultado al padre
  @Output() res = new EventEmitter;

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
    this.res.emit(this.resultado);
  }
  onOperador(a) {
    this.operador = a;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
