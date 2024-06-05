import { Component } from '@angular/core';
import { ThemeselectorComponent } from '../../themeselector/themeselector.component';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-user-config',
  standalone: true,
  templateUrl: './user-config.component.html',
  styleUrl: './user-config.component.css',
  imports: [ThemeselectorComponent],
})
export class UserConfigComponent {
    selectedTheme: string = 'theme-default';

  constructor(private themeService: ThemeService) {}

  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  isSelected(theme: string): boolean {
    return this.selectedTheme === theme;
  }
}
