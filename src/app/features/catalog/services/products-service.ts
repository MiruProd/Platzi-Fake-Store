import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api-service';
import { ProductModel } from '../../../core/models/product-model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { CategoryModel } from '../../../core/models/category-model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiService = inject(ApiService);

  public getProducts(limit: number, offset: number): Observable<ProductModel[]> {
    const params = new HttpParams({
      fromObject: {
        limit,
        offset,
      },
    });
    return this.apiService.get<ProductModel[]>('/products', params);
  }

  public getProductById(id: number): Observable<ProductModel> {
    return this.apiService.get<ProductModel>(`/products/${id}`);
  }

  public getCategories(limit: number): Observable<CategoryModel[]> {
    const params = new HttpParams({
      fromObject: {
        limit,
      },
    });

    return this.apiService.get<CategoryModel[]>('/categories', params);
  }

  public getProductsByCategory(
    categoryId: number,
    limit: number,
    offset: number,
  ): Observable<ProductModel[]> {
    const params = new HttpParams({
      fromObject: {
        limit,
        offset,
      },
    });
    return this.apiService.get<ProductModel[]>(`/categories/${categoryId}/products`, params);
  }
}
