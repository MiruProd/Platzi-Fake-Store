/**
 * Базовые поля категории, общие для всех сценариев.
 */
export interface CategoryBase {
  name: string;
  image: string; // URL-ссылка на изображение.
}

/**
 * Модель категории для отображения (GET-запросы).
 */
export interface CategoryModel extends CategoryBase {
  id: number; // Генерируется автоматически на сервере.
  slug: string; // Человекопонятный URL-идентификатор.
}

/**
 * ДТО для создания категории (POST-запрос).
 */
export interface CreateCategoryDto extends CategoryBase {}

/**
 * ДТО для обновления категории (PUT-запросы).
 */
export type UpdateCategoryDto = Partial<CreateCategoryDto>;
