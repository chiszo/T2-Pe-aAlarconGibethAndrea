import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
@Component({
  selector: 'app-pregunta4',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta4.component.html',
  styleUrl: './pregunta4.component.css'
})


export class Pregunta4Component {
  isValidTasa(indicador: string, tasa: number): boolean {
    let tasaMax = 0;
    switch (indicador) {
      case 'C':
      case 'A':
      case 'T':
        tasaMax = 0.3;
        break;
      default:
        tasaMax = 0.3;
    }
    return tasa <= tasaMax;
  }

  submit(indicadorInput: HTMLInputElement, tasaInput: HTMLInputElement):void{
    const indicador = indicadorInput.value;
    const tasa = parseFloat(tasaInput.value);
    if (this.isValidTasa(indicador, tasa)) {
      alert('negativo en alcoholemia');
    } else{
      alert('positivo en alcoholemia');
    }
  }
}
