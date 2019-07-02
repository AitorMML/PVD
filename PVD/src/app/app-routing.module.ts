import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PeriodosComponent } from './periodos/periodos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AdminComponent } from './admin/admin.component';
import { AutenticacionService } from './autenticacion.service';
import { ZonareservadaComponent } from './zonareservada/zonareservada.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'acerca-de', component: AcercaComponent},
  {path: 'proyectos', component: ProyectosComponent}, // probablemente tenga hijos
  {path: 'periodos', component: PeriodosComponent},   // idem
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent, canActivate: [!AutenticacionService]}, // no sirve si ya inició sesión
  {path: 'admin', component: AdminComponent, canActivate: [AutenticacionService]},
  {path: 'reservada', component: ZonareservadaComponent, canActivate: [AutenticacionService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// *************************************************************
// hacer archivo en el servidor para encargarse de conexión a base de datos
// ************************************************************
