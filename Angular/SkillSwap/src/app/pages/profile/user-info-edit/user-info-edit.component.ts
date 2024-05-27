import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditProfileService } from '../../../services/editprofile/edit-profile.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { usuario } from '../../../model/usuario';

@Component({
  selector: 'app-user-info-edit',
  templateUrl: './user-info-edit.component.html',
  styleUrls: ['./user-info-edit.component.css'],
})
export class UserInfoEditComponent implements OnInit {
  @Input() miUsuario: usuario;

  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private editProfileService: EditProfileService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      puestoEmpresa: [this.miUsuario.puestoEmpresa, Validators.required],
      email: [this.miUsuario.email, [Validators.required, Validators.email]],
      urlGitHub: [this.miUsuario.urlGitHub, [Validators.required, Validators.url]],
    });
  }

  guardarPerfil() {
    if (this.profileForm.valid) {
      const usuarioParaGuardar: usuario = {
        id: this.miUsuario.id,
        nombre: this.miUsuario.nombre,
        apellido: this.miUsuario.apellido,
        contrasena: this.miUsuario.contrasena,
        puestoEmpresa: this.profileForm.value.puestoEmpresa,
        email: this.profileForm.value.email,
        urlGitHub: this.profileForm.value.urlGitHub,
        skills: this.miUsuario.skills || [],
        fotoDePerfil: this.miUsuario.fotoDePerfil || '',
      };

      this.usuarioService.postUsuario(usuarioParaGuardar).subscribe(
        (response) => {
          console.log('Perfil guardado exitosamente:', response);
          this.editProfileService.setIsEditing(false);
        },
        (error) => {
          console.error('Error al guardar el perfil:', error);
        }
      );
    }
  }
}
