import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public photos: any[] = [];

  constructor(http: HttpClient) {
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(photos => this.photos = photos);
  }
}
