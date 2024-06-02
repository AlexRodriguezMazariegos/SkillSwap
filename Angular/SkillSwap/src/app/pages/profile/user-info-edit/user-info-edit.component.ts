import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillService } from '../../../services/skill/skill.service';
import { skill } from '../../../model/skill';
import { HotToastService } from '@ngneat/hot-toast';
import { EditProfileService } from '../../../services/editprofile/edit-profile.service';
import { usuario } from '../../../model/usuario';

@Component({
  selector: 'app-user-info-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-info-edit.component.html',
  styleUrls: ['./user-info-edit.component.css'],
})
export class UserInfoEditComponent implements OnInit {
  @Input() miUsuario: any;
  @Output() usuarioModificado = new EventEmitter<usuario>();

  skills: skill[] = [];
  selectedSkills: skill[] = [];

  originalUsuario: usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    urlGitHub: '',
    puestoEmpresa: '',
    skills: [],
    fotoDePerfil: '',
  };
  window: any;

  constructor(
    private skillService: SkillService,
    private toast: HotToastService,
    private editService: EditProfileService
  ) {}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((data) => {
      this.skills = data;
      if (this.miUsuario.skills) {
        this.selectedSkills = this.miUsuario.skills;
      }
    });

    this.editService.isEditing$.subscribe((isEditing: boolean) => {
      if (!isEditing) {
        this.actualizarUsuario();
      }
    });
  }

  onSkillSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null;
    if (selectElement) {
      const selectedOptions = Array.from(selectElement.selectedOptions).map(
        (option) => JSON.parse(option.value) as skill
      );
      if (selectedOptions.length + this.selectedSkills.length <= 12) {
        this.selectedSkills = [...this.selectedSkills, ...selectedOptions];
      } else {
        this.showErrorToast();
      }
      selectElement.value = '';
    }
  }

  onSkillDeselect(skill: skill): void {
    this.selectedSkills = this.selectedSkills.filter((s) => s.id !== skill.id);
  }

  isSkillSelected(skill: skill): boolean {
    return this.selectedSkills.some((s) => s.id === skill.id);
  }

  skillToString(skill: skill): string {
    return JSON.stringify(skill);
  }

  showErrorToast() {
    this.toast.error('No puedes seleccionar más de 12 skills', {
      duration: 1400,
      style: {
        border: '1px solid #002d3c',
        padding: '16px',
        color: '#002d3c',
        zIndex: 999999999,
        position: 'fixed',
        top: '60px',
        left: '650px',
      },
      iconTheme: {
        primary: '#002d3c',
        secondary: '#ffff',
      },
    });
  }

  actualizarUsuario(): void {
    const usuarioModificado = {
      ...this.miUsuario,
      skills: this.selectedSkills,
    };
    this.editService.setUsuarioEditado(usuarioModificado);
    
    this.window.location.reload();
  }
}
