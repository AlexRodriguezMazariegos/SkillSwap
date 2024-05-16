import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { usuario } from '../../model/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
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




  nuevoUsuario:usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    urlGitHub: '',
    puestoEmpresa: '',
    skills: []
  }
  textoError:string=""
  nombre:string=""
  apellido:string=""
  email:string=""
  contrasena1:string=""
  contrasena2:string=""

  constructor(private router: Router, private usuarioService:UsuarioService) { }
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



  registrarUsuario(){
    if(this.nombre =="" || this.apellido =="" || this.email=="" || this.contrasena1 =="" || this.contrasena2 == ""){
      this.textoError= "Por favor rellene todos los campos"
    }
    else if(this.contrasena1 != this.contrasena2){
      this.textoError= "Las contraseñas no coinciden"
    }
    else if (!this.email.includes("@") || !this.email.includes(".")){
      this.textoError="Introduzca un correo valido"
    }
    else{
      this.nuevoUsuario.nombre=this.nombre;
      this.nuevoUsuario.apellido=this.apellido;
      this.nuevoUsuario.email=this.email;
      this.nuevoUsuario.contrasena=this.contrasena1;
      this.usuarioService.postUsuario(this.nuevoUsuario).subscribe((data:usuario)=>{
        console.log(data)
        this.router.navigate(['/home'])
      });
    }
  }
}
