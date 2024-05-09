import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

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
];
