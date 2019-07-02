import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private servicioUsuario: UsuariosService) { }

  /**
   * Revisa que tenga un token existente / válido, si no, no permite acceder a la ruta
   * @param next 
   * @param state 
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.servicioUsuario.tokenSesion) {
      return true;
    }
    return false;
  }
}
