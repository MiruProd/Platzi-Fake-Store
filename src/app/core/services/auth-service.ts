import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api-service';
import { LoginDto, TokenResponse } from '../models/auth-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiService = inject(ApiService);
  private readonly accessTokenKey = 'access_token';
  private readonly refreshTokenKey = 'refresh_token';

  private readonly currentUserSignal = signal<UserModel | null>(null);
  public readonly currentUser = this.currentUserSignal.asReadonly();

  public login(credentials: LoginDto): Observable<TokenResponse> {
    return this.apiService.post<TokenResponse, LoginDto>('auth/login', credentials).pipe(
      tap((response) => {
        localStorage.setItem(this.accessTokenKey, response.access_token);
        localStorage.setItem(this.refreshTokenKey, response.refresh_token);
      }),
    );
  }

  public getProfile(): Observable<UserModel> {
    return this.apiService.get<UserModel>('auth/profile').pipe(
      tap((response) => {
        this.currentUserSignal.set(response);
      }),
    );
  }

  public logout(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    this.currentUserSignal.set(null);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }
}
