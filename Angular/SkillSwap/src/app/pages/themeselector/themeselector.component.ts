import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-themeselector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './themeselector.component.html',
  styleUrl: './themeselector.component.css'
})
export class ThemeselectorComponent {
  selectedTheme: string = 'theme-default';
  
  constructor(private themeService: ThemeService) {}

  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  isSelected(theme: string): boolean {
    return this.selectedTheme === theme;
  }
}
