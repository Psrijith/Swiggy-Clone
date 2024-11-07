import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesKey = 'favoritesList';
  private defaultFavorites = [
    {
      id: 1,
      name: 'Fried Chicken',
      price: 150,
      description: 'Crispy and delicious',
    },
    { id: 2, name: 'Burger', price: 120, description: 'Cheesy and juicy' },
    {
      id: 3,
      name: 'French Fries',
      price: 80,
      description: 'Golden and crunchy',
    },
    {
      id: 4,
      name: 'Pizza',
      price: 350,
      description: 'Classic cheese pizza with a crispy crust',
    },
    {
      id: 5,
      name: 'Pasta',
      price: 220,
      description: 'Creamy and rich Alfredo pasta',
    },
    {
      id: 6,
      name: 'Caesar Salad',
      price: 180,
      description: 'Fresh veggies with a tangy Caesar dressing',
    },
    {
      id: 7,
      name: 'Spicy Wings',
      price: 200,
      description: 'Hot and spicy wings with a zesty sauce',
    },
    {
      id: 8,
      name: 'Fish Tacos',
      price: 250,
      description: 'Grilled fish in soft tortillas with fresh toppings',
    },
    {
      id: 9,
      name: 'Chocolate Milkshake',
      price: 120,
      description: 'Rich, creamy, and indulgent chocolate shake',
    },
    {
      id: 10,
      name: 'Cheese Sticks',
      price: 140,
      description: 'Mozzarella cheese sticks with marinara dip',
    },
    
  ];

  constructor() {
    // Initialize favorites if they don't exist
    if (!localStorage.getItem(this.favoritesKey)) {
      this.setFavorites(this.defaultFavorites);
    }
  }

  getFavorites(): any[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(item: any): void {
    const favorites = this.getFavorites();
    favorites.push(item);
    this.setFavorites(favorites);
  }

  removeFavorite(itemId: number): void {
    const favorites = this.getFavorites().filter((item) => item.id !== itemId);
    this.setFavorites(favorites);
  }

  setFavorites(favorites: any[]): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  isFavorite(itemId: number): boolean {
    return this.getFavorites().some((item) => item.id === itemId);
  }

  resetFavorites(): void {
    this.setFavorites(this.defaultFavorites);
  }
}
