import { CategoryModel } from './category-model';

/**
 * Базовые поля товара, общие для всех сценариев.
 */
export interface ProductBase {
  title: string;
  price: number;
  description: string;
  images: string[];
}

/**
 * Модель товара для отображения (GET-запросы).
 */
export interface ProductModel extends ProductBase {
  id: number; // Генерируется автоматически на сервере.
  category: CategoryModel; // Полный объект категории.
  slug: string; // Человекопонятный URL-идентификатор.
  creationAt: string; // Дата создания товара (ISO строка).
  updatedAt: string; // Дата последнего обновления товара (ISO строка).
}

/**
 * ДТО для создания товара (POST-запрос).
 */
export interface CreateProductDto extends ProductBase {
  categoryId: number; // ID категории для привязки на сервере.
}

/**
 * ДТО для обновления товара (PUT/PATCH-запросы).
 */
export type UpdateProductDto = Partial<CreateProductDto>;
