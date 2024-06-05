import { Component } from '@angular/core';
import { ThemeselectorComponent } from "../../themeselector/themeselector.component";

@Component({
    selector: 'app-user-config',
    standalone: true,
    templateUrl: './user-config.component.html',
    styleUrl: './user-config.component.css',
    imports: [ThemeselectorComponent]
})
export class UserConfigComponent {

}
