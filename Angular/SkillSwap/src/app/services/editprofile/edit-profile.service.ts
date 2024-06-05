import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  private isEditingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isEditing$ = this.isEditingSubject.asObservable();

  private usuarioEditadoSubject: BehaviorSubject<usuario | null> =
    new BehaviorSubject<usuario | null>(null);
  usuarioEditado$ = this.usuarioEditadoSubject.asObservable();

  // Creamos un BehaviorSubject para almacenar los datos del usuario
  private userData$: BehaviorSubject<usuario | null> =
    new BehaviorSubject<usuario | null>(null);

  constructor() {}

  setIsEditing(value: boolean): void {
    this.isEditingSubject.next(value);
  }

  setUsuarioEditado(usuario: usuario): void {
    this.usuarioEditadoSubject.next(usuario);
    this.userData$.next(usuario); // Actualizamos los datos del usuario
  }

  // Método para obtener los datos del usuario
  getUserData(): Observable<usuario | null> {
    return this.userData$.asObservable();
  }
}
