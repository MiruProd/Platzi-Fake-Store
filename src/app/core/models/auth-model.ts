/**
 * ДТО для авторизации (POST /auth/login).
 */
export interface LoginDto {
  email: string;
  password: string;
}

/**
 * Ответ сервера с парой JWT-токенов.
 */
export interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

/**
 * ДТО для обновления токена доступа (POST /auth/refresh-token).
 */
export interface RefreshTokenDto {
  refreshToken: string; // Передается refresh_token для получения новой пары.
}
