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
  submit(indicador: HTMLInputElement, tasa: HTMLInputElement):void{
    
  }
}
