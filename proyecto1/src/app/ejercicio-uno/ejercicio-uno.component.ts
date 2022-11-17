import { NgIf } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css'],
})
export class EjercicioUnoComponent implements OnInit {
  myNumber = parseFloat('ingrese numero');

  valor: number = 0;
  mensaje: string = '';

  constructor() {}

  ngOnInit(): void {}

  //ejercicio
  calcularParImpar() {
    if (this.valor === 0) this.mensaje = 'Ingrese otro numero diferente a cero';
    else if (this.valor % 2 == 0) this.mensaje = 'El valor es un numero par';
    else if (this.valor % 2 != 0) this.mensaje = 'El valor es un numero impar';
    else this.mensaje = 'Por favor ingrese un numero';
  }
}
