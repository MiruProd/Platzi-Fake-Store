import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        loadComponent: () => import('./features/catalog/pages/product-list/product-list').then(m => m.ProductList)
    },
    {
        path: 'product/:id',
        loadComponent: () => import('./features/catalog/pages/product-detail/product-detail').then(m => m.ProductDetail)
    },
    {
        path: 'cart',
        loadComponent: () => import('./features/cart/pages/cart-page/cart-page').then(m => m.CartPage)
    },
    {
        path: 'profile',
        loadComponent: () => import('./features/profile/pages/profile-page/profile-page').then(m => m.ProfilePage)
    },
    {
        path: 'auth',
        loadComponent: () => import('./features/auth/pages/auth-page/auth-page').then(m => m.AuthPage)
    },
    {
        path: '**',
        redirectTo: 'products',
    },
];
