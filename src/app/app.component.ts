import { PhotoService } from './photos/photo/photo.service';
import { Component } from '@angular/core';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public photos: Photo[] = [];

  constructor(photoService: PhotoService) {

    photoService
      .listFromUser('flavio')
      .subscribe(photos => {
        this.photos = photos
      });
  }
}
