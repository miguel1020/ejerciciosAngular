import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css']
})
export class EjercicioUnoComponent implements OnInit {
  
  myNumber:number=0;

  constructor() { 
    this.myNumber=0; 
    
  }

  ngOnInit(): void {
  }

}
