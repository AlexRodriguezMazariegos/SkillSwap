import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeKey = 'user-theme';

  constructor() {
    const theme = localStorage.getItem(this.themeKey);
    if (theme) {
      this.setTheme(theme);
    }
  }

  setTheme(theme: string) {
    document.documentElement.className = theme;
    localStorage.setItem(this.themeKey, theme);
  }

  getTheme(): string {
    return localStorage.getItem(this.themeKey) || 'theme-default';
  }
}
