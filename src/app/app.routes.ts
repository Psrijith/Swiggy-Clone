import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { KfcComponent } from './kfc/kfc.component'; 
import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'kfc',
    component: KfcComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  { 
    path: 'favorites',
    component: FavoritesComponent 
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}