import { Component, OnInit, inject } from '@angular/core'; // Для OnInit и inject
import { ActivatedRoute, RouterModule } from '@angular/router';        // Для ActivatedRoute
import { AlbumService } from '../../services/album.service'; // Путь к твоему сервису
import { Album } from '../../models/album.model';         // Путь к твоей модели
import { CommonModule, Location } from '@angular/common';           // Понадобится для [ngModel] или других директив
import { FormsModule } from '@angular/forms';             // Обязательно для работы с input [(ngModel)]

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})

export class AlbumDetail implements OnInit {
  album!: Album;
  tempTitle = ''; // Для редактирования
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);
  private location = inject(Location);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.tempTitle = data.title;
    });
  }

  save() {
    this.album.title = this.tempTitle;
    this.albumService.updateAlbum(this.album).subscribe(updated => {
      console.log('Saved!', updated);
      // JSONPlaceholder не сохраняет на сервере реально, 
      // но мы обновляем локальный объект
    });
  }

  goBack() {
    this.location.back();
  }
}