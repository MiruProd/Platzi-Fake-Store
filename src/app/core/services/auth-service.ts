import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api-service';
import { LoginDto, TokenResponse } from '../models/auth-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiService = inject(ApiService);
  private readonly accessTokenKey = 'access_token';
  private readonly refreshTokenKey = 'refresh_token';

  public login(credentials: LoginDto): Observable<TokenResponse> {
    return this.apiService.post<TokenResponse, LoginDto>('auth/login', credentials).pipe(
      tap((response) => {
        localStorage.setItem(this.accessTokenKey, response.access_token);
        localStorage.setItem(this.refreshTokenKey, response.refresh_token);
      }),
    );
  }
}
