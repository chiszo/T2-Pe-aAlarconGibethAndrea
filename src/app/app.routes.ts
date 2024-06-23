import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
  /*{path:"amaterial", component: EjemploAmaterialComponent},*/
  {path: "login", component: LoginComponent},
  {path:"dashboard", component: DashboardComponent},
  {path: "", redirectTo: "login", pathMatch:"full"},
  {path: "**", component: PageNotFoundComponent}
];