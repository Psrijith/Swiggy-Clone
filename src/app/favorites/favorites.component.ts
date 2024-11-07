import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(itemId: number): void {
    this.favoritesService.removeFavorite(itemId);
    this.loadFavorites();
  }

  resetFavorites(): void {
    this.favoritesService.resetFavorites();
    this.loadFavorites();
  }
}
