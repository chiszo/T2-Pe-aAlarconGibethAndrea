import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  /*Nos dirigimos al rutas hijas por eso el activatedRoute */
  constructor(private router:Router, private route: ActivatedRoute, private authService:AuthService){}


}
