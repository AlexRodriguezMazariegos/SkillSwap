import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { login, usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { json } from 'stream/consumers';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  @ViewChild('animatedText', { static: true }) animatedTextElement: ElementRef<HTMLHeadingElement> | undefined;

  headers = new HttpHeaders().set('Content-Type', 'application/json');

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
    'Aprende y crece'
  ];

  email:string = ""
  contrasena:string = ""

  usuario:login = {
    email: 'juan@eviden.com',
    contrasena: '1111'
  }

  textoAleatorio: string = '';

  constructor(private router: Router, private usuarioService:UsuarioService) { }

  //Metodo de inicio
  ngOnInit(): void {

    console.log(this.usuario)

    this.textoAleatorio = this.textosAleatorios[
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
    }

    this.usuarioService.login(this.usuario).subscribe((data:usuario)=>{
      console.log(data)
    })

  }

  navigateToHome() {
    this.router.navigate(['/home']); // Navegar a la ruta '/home'
  }

  login(){
    this.usuarioService.login(this.usuario).subscribe((data:usuario)=>{
      console.log(data)
    })
  }

}
