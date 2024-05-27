import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  private isEditingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isEditing$ = this.isEditingSubject.asObservable();

  constructor() {}

  setIsEditing(value: boolean): void {
    this.isEditingSubject.next(value);
    console.log("edit-profile-service!");
  }
}
