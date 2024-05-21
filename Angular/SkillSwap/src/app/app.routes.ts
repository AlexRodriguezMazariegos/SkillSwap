import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ArticuloPorIdComponent } from './pages/articulo-por-id/articulo-por-id.component';
import { EditorArticuloComponent } from './pages/editor-articulo/editor-articulo.component';
import { BuscarArticulosComponent } from './pages/buscar-articulos/buscar-articulos.component';

export const routes: Routes = [
    {
        path: 'login', component:AppComponent
    },
    {
        path: '', component:LoginComponent
    },
    {
        path: 'home', component:HomeComponent
    },
    {
        path: 'profile/:id', component:ProfileComponent
    },
    {
        path: 'register', component:SignupComponent
    },
    {
        path: 'chat', component:ChatComponent
    },
    {
        path: 'articulo/:id', component:ArticuloPorIdComponent
    },
    {
        path: 'postnew', component:EditorArticuloComponent
    },
    {
        path: 'buscar-articulos', component:BuscarArticulosComponent
    }
    
];
