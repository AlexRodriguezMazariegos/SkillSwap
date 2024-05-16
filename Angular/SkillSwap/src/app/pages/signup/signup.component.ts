import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit{

  @ViewChild('animatedText', { static: true }) animatedTextElement: ElementRef<HTMLHeadingElement> | undefined;
  
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

  textoAleatorio: string = '';

  constructor(private router: Router) { }

  //Metodo de inicio
  ngOnInit(): void {
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
  }

  navigateToHome() {
    this.router.navigate(['/home']); // Navegar a la ruta '/home'
  }
}
