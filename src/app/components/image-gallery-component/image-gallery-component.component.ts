import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-gallery-component',
  templateUrl: './image-gallery-component.component.html',
  styleUrls: ['./image-gallery-component.component.scss']
})
export class ImageGalleryComponentComponent {

  reduxObj$: Observable<any> | undefined;
  imagesList: any;

  constructor(  private store: Store<any> ) { }

  ngOnInit(){

    this.reduxObj$ = this.store.select(redux => redux.imageReducer);
    this.reduxObj$.subscribe( (resp) => {
      this.imagesList = resp.images;
      console.log(this.imagesList);
      
    });

  }

}
