import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient); // Внедрение HTTP-клиента через функциональный DI.
  private readonly baseUrl = environment.apiUrl; // Базовый URL-адрес из конфигурации сред.

  public get<T>(path: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, { params });
  }

  // Т описывает ответ, а D — тип отправляемого тела (по умолчанию unknown).
  public post<T, D = unknown>(path: string, body: D): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, body);
  }

  public put<T, D = unknown>(path: string, body: D): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${path}`, body);
  }

  public delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}`);
  }
}
