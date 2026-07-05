/**
 * Ответ сервера при успешной загрузке файла (POST /files/upload).
 */
export interface UploadFileResponse {
  originalname: string; // Исходное имя загруженного файла.
  filename: string; // Сгенерированное уникальное имя файла на сервере.
  location: string; // Прямая URL-ссылка на загруженный файл.
}
