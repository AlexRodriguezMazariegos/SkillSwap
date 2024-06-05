import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from '../../model/usuario';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  @ViewChild('animatedText', { static: true }) animatedTextElement:
    | ElementRef<HTMLHeadingElement>
    | undefined;

  // Lista de textos posibles
  textosAleatorios: string[] = [
    '¡Bienvenido a SkillSwap!',
    'Descubre habilidades en SkillSwap',
    'Explora nuevas habilidades',
    'Crea conexiones profesionales',
    'Aprende y comparte en SkillSwap',
    'Comparte tu conocimiento',
    'Descubre talentos únicos',
    'Conviértete en un mentor',
    'Innova con creatividad',
    'Crecimiento continuo',
    'Networking efectivo',
    'Aprende y crece',
  ];

  textoError: string = '';
  user: usuario = {
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

  textoAleatorio: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  //Metodo de inicio
  ngOnInit(): void {
    console.log(this.user);

    this.textoAleatorio =
      this.textosAleatorios[
        Math.floor(Math.random() * this.textosAleatorios.length)
      ];

    if (this.animatedTextElement && this.animatedTextElement.nativeElement) {
      const textElement = this.animatedTextElement.nativeElement;
      const textContent = textElement.textContent;
      if (textContent !== null) {
        textElement.textContent = '';

        for (let i = 0; i < textContent.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.textContent = textContent[i];
          charSpan.style.animationDelay = `${i * 50}ms`;
          textElement.appendChild(charSpan);
        }
      } else {
        console.error('El contenido del elemento es nulo.');
      }
      this.user = this.authService.user;
      if (this.user == null) {
        this.user = new usuario();
      }
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/home']);
      }
    }
  }

  login() {
    console.log(this.user.email);

    if (this.user.email == null || this.user.contrasena == null) {
      return;
    }

    this.authService.login(this.user).subscribe(
      (response) => {
        this.authService.saveToken(response.token);
        this.authService.saveUser(response.token);

        this.authService.saveRole(response.token);

        let user = this.authService.user;

        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 50);
      },
      (err) => {
        if (err.status == 401) {
          this.user.email = '';
          this.user.contrasena = '';
        }
      }
    );
  }
}
