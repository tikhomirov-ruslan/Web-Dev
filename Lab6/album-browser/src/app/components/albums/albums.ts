import { Component, OnInit, inject } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})

export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;
  private albumService = inject(AlbumService);

  ngOnInit() {
    this.albumService.getAlbums().subscribe((data: Album[]) => { 
      this.albums = data;
      this.loading = false;
    });
  }

  delete(id: number, event: Event) {
    event.stopPropagation(); // Чтобы не переходить в детали при клике на "удалить"
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
