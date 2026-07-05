/** Роль пользователя в системе. */
export type UserRole = 'admin' | 'customer';

/**
 * Базовые поля пользователя, общие для всех сценариев.
 */
export interface UserBase {
  name: string;
  email: string;
  avatar: string; // URL-ссылка на аватар профиля.
}

/**
 * Модель пользователя для отображения (GET-запросы).
 */
export interface UserModel extends UserBase {
  id: number; // Генерируется автоматически на сервере.
  role: UserRole; // Роль строго ограничена типом UserRole.
  password?: string; // Пароль может отсутствовать в целях безопасности.
}

/**
 * ДТО для создания пользователя (POST-запрос).
 */
export interface CreateUserDto extends UserBase {
  password: string; // Пароль обязателен при регистрации.
}

/**
 * ДТО для обновления данных пользователя (PUT/PATCH-запросы).
 */
export type UpdateUserDto = Partial<CreateUserDto>;
