import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  public photos: Photo[] = [];
  public filter: string = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) {}

  public ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService.listFromUser(userName).subscribe((photos) => {
      this.photos = photos;
    });
  }

}
