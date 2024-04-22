import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'clase_1';
  public edad_uno = 0
  public edad_dos = 0
  public suma = 0
  public promedio = 0

  constructor(){

  }

  ngOnInit():void{
  }

  calcular(){
    this.suma = this.edad_uno + this.edad_dos
    this.promedio = this.suma / 2
  }

  limpiar(){
    this.edad_uno = 0
    this.edad_dos = 0
    this.suma = 0
    this.promedio = 0
  }
}
