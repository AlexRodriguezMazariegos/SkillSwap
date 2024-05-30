import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  private isEditingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isEditing$ = this.isEditingSubject.asObservable();

  private usuarioEditadoSubject: BehaviorSubject<usuario | null> = new BehaviorSubject<usuario | null>(null);
  usuarioEditado$ = this.usuarioEditadoSubject.asObservable();

  constructor() {}

  setIsEditing(value: boolean): void {
    this.isEditingSubject.next(value);
  }

  setUsuarioEditado(usuario: usuario): void {
    this.usuarioEditadoSubject.next(usuario);
  }
}
