import { Injectable } from '@angular/core';
import { Usuario } from './Usuario';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  sesionActual: Usuario;
  tokenSesion = 'placeholder';

  constructor(private cliente: HttpClient) { }

  /**
   * solo para uso del administrador.
   * Crea un usuario que la base de datos (back-end) verifica
   */
  agregarCuenta(expediente: number, nombre: string, email: string, contrasena: string, activo: boolean) {

    const cuentaNueva = new Usuario(expediente, nombre, email, contrasena, activo, '', false);

      // Post para registro en base de datos
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // this.cliente.post(/*url de base de datos*/, cuentaNueva, { headers: headers, observe: 'response' }).subscribe(
    //  (res: HttpResponse<any>) => {
    //    this.tokenSesion = res.headers.get('x-auth');
    //  }
    // );
  }

  // lee datos de formulario que da el administrador para crear cuentas
  agregarDeFormulario(formulario: any) {
    const expediente = formulario.expediente;
    const nombre = formulario.nombre;
    const email = formulario.email;
    const contrasena = formulario.contrasena; // hashear
    const activo = formulario.activo;

    this.agregarCuenta(expediente, nombre, email, contrasena, activo);
  }

  iniciarSesion(formulario: any) {
    // formulario recibe usuario y contraseña en pantalla de login


  // comprobación de cuentas
  }

  validarToken() {

  }

  // cierre de sesión
  cerrarSesion() {

  }
}
