import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    servicioUsuarios: UsuariosService
  ) { }

  ngOnInit() {
  }

  cerrarSesion() {
    // this.servicioUsuarios.cerrarSesion();
  }

}
