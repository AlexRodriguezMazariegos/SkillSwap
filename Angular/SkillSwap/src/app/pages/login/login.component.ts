import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  @ViewChild('animatedText', { static: true }) animatedTextElement: ElementRef<HTMLHeadingElement> | undefined;

  constructor(private router: Router) { }

  //Metodo de inicio
  ngOnInit(): void {
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
