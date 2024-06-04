import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ArticuloPorIdComponent } from './pages/articulo-por-id/articulo-por-id.component';
import { EditorArticuloComponent } from './pages/editor-articulo/editor-articulo.component';
import { MisArticulosComponent } from './pages/mis-articulos/mis-articulos.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '', component:LoginComponent
    },
    {
        path: 'home', component:HomeComponent, canActivate: [authGuard]
    },
    {
        path: 'profile/:id', component:ProfileComponent, canActivate: [authGuard]
    },
    {
        path: 'register', component:SignupComponent
    },
    {
        path: 'chat/:id', component:ChatComponent, canActivate: [authGuard]
    },
    {
        path: 'articulo/:id', component:ArticuloPorIdComponent, canActivate: [authGuard]
    },
    {
        path: 'postnew', component:EditorArticuloComponent, canActivate: [authGuard]
    },
    {
        path: 'mis-articulos', component:MisArticulosComponent, canActivate: [authGuard]
    },
    {
        path: 'editar-articulo/:id', component: EditorArticuloComponent, canActivate: [authGuard]
    },
    
];
