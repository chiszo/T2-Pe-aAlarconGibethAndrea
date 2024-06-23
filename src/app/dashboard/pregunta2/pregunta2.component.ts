import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {

  utilidad: number | null = null;

  calcularUtilidad(salario: number, anos: number): number | null {
    if (isNaN(salario) || isNaN(anos)) {
      return null;
    }

    if (anos < 1) {
      return salario * 0.05;
    } else if (anos < 2) {
      return salario * 0.07;
    } else if (anos < 5) {
      return salario * 0.10;
    } else if (anos < 10) {
      return salario * 0.15;
    } else {
      return salario * 0.20;
    }
  }

  submit(salarioInput: HTMLInputElement, anosInput: HTMLInputElement): void {
    const salario = parseFloat(salarioInput.value);
    const anos = parseInt(anosInput.value, 10);
    this.utilidad = this.calcularUtilidad(salario, anos);

    if (this.utilidad !== null) {
      alert(`La utilidad calculada es: ${this.utilidad.toFixed(2)}`);
    } else {
      alert('Por favor, ingrese valores válidos.');
    }
  }
}
