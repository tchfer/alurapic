import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photo[] = [];
  public rows: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  public groupColumns(photos: Photo[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3))
    }
    return newRows
  }
}
