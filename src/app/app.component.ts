import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { addIcons } from "ionicons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  edadUno: number | null = null;
  edadDos: number | null = null;
  suma: number | null = null;
  promedio: number | null = null;

  calcular(): void {
    if (this.edadUno !== null && this.edadDos !== null) {
      this.suma = this.edadUno + this.edadDos;
      this.promedio = this.suma / 2;
    }
  }

  limpiar(): void {
    this.edadUno = null;
    this.edadDos = null;
    this.suma = null;
    this.promedio = null;
  }
}
