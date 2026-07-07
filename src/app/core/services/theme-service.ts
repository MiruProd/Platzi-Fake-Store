import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly isDarkSignal = signal<boolean>(false);
  public readonly isDark = this.isDarkSignal.asReadonly();

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.setTheme(isDark);
  }

  public toggleTheme(): void {
    this.setTheme(!this.isDarkSignal());
  }

  private setTheme(isDark: boolean): void {
    this.isDarkSignal.set(isDark);

    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
