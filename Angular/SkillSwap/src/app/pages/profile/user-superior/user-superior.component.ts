import { Component, Input, OnInit } from '@angular/core';
import { UserBotonesComponent } from '../user-botones/user-botones.component';

@Component({
  selector: 'app-user-superior',
  standalone: true,
  templateUrl: './user-superior.component.html',
  styleUrl: './user-superior.component.css',
  imports: [UserBotonesComponent],
})
export class UserSuperiorComponent implements OnInit {
  @Input() miUsuario: any;

  profileImgSrc: string | undefined;

  ngOnInit() {
    this.profileImgSrc = `../../../assets/img/profile/${this.miUsuario?.fotoDePerfil}.jpg`;
  }

}
