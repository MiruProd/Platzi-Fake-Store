import { Injectable, signal, computed, effect } from '@angular/core';
import { CartItem } from '../models/cart-model';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly storageKey = 'shopping_cart';

  private readonly cartItemsSignal = signal<CartItem[]>(this.loadFromStorage());
  public readonly cartItems = this.cartItemsSignal.asReadonly();

  public readonly totalItems = computed(() => {
    return this.cartItemsSignal().reduce((sum, item) => sum + item.quantity, 0);
  });

  public readonly totalPrice = computed(() => {
    return this.cartItemsSignal().reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0,
    );
  });

  constructor() {
    effect(() => {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cartItemsSignal()));
    });
  }

  public addProduct(product: ProductModel): void {
    this.cartItemsSignal.update((items) => {
      const existing = items.find((item) => item.product.id === product.id);

      if (existing) {
        return items.map((item) =>
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item,
        );
      }

      return [...items, { product, quantity: 1 }];
    });
  }

  public removeProduct(productId: number): void {
    this.cartItemsSignal.update(
      (items) => items.filter(
        (item) => item.product.id !== productId
      )
    );
  }

  public updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
      this.removeProduct(productId);
      return;
    }

    this.cartItemsSignal.update((items) =>
      items.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
    );
  }

  public clearCart(): void {
    this.cartItemsSignal.set([]);
  }

  private loadFromStorage(): CartItem[] {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      try {
        return JSON.parse(data) as CartItem[];
      } catch (error) {
        console.error('Ошибка при чтении корзины из localStorage:', error);
        return [];
      }
    }
    return [];
  }
}
