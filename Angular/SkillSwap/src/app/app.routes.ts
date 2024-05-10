import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';

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
        path: 'profile', component:ProfileComponent
    },
    {
        path: 'register', component:SignupComponent
    },
];
