import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api-service';
import { ProductModel } from '../../../core/models/product-model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

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
}
