import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Location нужен для кнопки Назад
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/album.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})

export class AlbumPhotos implements OnInit {
  // 1. Объявляем свойства, которые ищет HTML
  photos: Photo[] = [];
  albumId!: number;
  loading = true;

  // зависимости
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);
  private location = inject(Location); 

  ngOnInit(): void {
    // Получаем ID из URL
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    // Загружаем фотографии
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data: Photo[]) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Ошибка при загрузке фото:', err);
        this.loading = false;
      }
    });
  }

  back(): void {
    this.location.back(); 
  }
}