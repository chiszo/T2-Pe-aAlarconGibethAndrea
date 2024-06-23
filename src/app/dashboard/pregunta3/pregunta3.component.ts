import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {

  submit(cantidadInput: HTMLInputElement):void{
    const cantidad = parseInt(cantidadInput.value);
    let total = 0;
    if(cantidad<=5) {
      total = 520;
      alert(`El total es: ${total}`)
    } else {
      total = (520*0.1)+520
      alert(`El total es: ${total}`)
    }
  }
}
