import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';
import { ThemeService } from '../../../core/services/theme-service';
import { Button } from '../../ui-kits/button/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly authService = inject(AuthService);
  private readonly themeService = inject(ThemeService);

  public readonly currentUser = this.authService.currentUser;
  public readonly isDark = this.themeService.isDark;

  public logout(): void {
    this.authService.logout();
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
