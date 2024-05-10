import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [NavbarComponent, SidebarComponent]
})
export class ProfileComponent {

}
