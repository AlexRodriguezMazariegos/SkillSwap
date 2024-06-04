import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search/search.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class NavbarComponent implements OnInit {
  usuario = sessionStorage.getItem('usuario');
  nombreUsuario = '';
  imagenUsuario = '';
  searchControl: FormControl = new FormControl();
  inputText: string = '';
  selectedOption: string = 'Todos';

  constructor(
    private themeService: ThemeService,
    public dialog: MatDialog,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    const storedTheme = this.themeService.getTheme();
    this.themeService.setTheme(storedTheme);
    if (this.usuario) {
      const currentUser = JSON.parse(this.usuario);
      this.nombreUsuario = currentUser.nombre;
      this.imagenUsuario = currentUser.fotoDePerfil;
    }

    const { text, option } = this.searchService.getSearchCriteria();
    this.inputText = text;
    this.selectedOption = option;
    this.searchControl.setValue(this.inputText);

    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.inputText = value;
        this.searchService.setSearchCriteria(
          this.inputText,
          this.selectedOption
        );
        if (this.router.url !== '/home') {
          this.router.navigate(['/home']);
        }
      });
  }

  onOptionChange(event: any): void {
    this.selectedOption = event.target.value;
    this.searchService.setSearchCriteria(this.inputText, this.selectedOption);
  }

  abrirProfile() {
    if (this.usuario) {
      const currentUser = JSON.parse(this.usuario);
      this.router.navigate([`/profile/${currentUser.id}`]);
    } else {
      this.router.navigate([``]);
    }
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.searchService.setSearchCriteria(this.inputText, this.selectedOption);
  }
}
