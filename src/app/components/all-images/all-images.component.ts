import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImageApiI } from 'src/app/interfaces/image-interface';
import { addImage } from 'src/app/redux/image.actions';
import { DataApiService } from 'src/app/services/data-api.service';


@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.scss']
})

export class AllImagesComponent {

  imagesArray: ImageApiI[] = []

  constructor(  private store: Store,
    private dataService: DataApiService) { }

    ngOnInit(){
  
      this.dataService.getImagesAPI().subscribe({
        
        next:(response: any): void=>{
          this.imagesArray = response
          console.log("this.imagesArray", this.imagesArray);

        },
        error:(error)=>{
          console.error(error)
        }
  
      })

    }

  addNewImage(imageUrl: string, imageName: string) {
    const image = { url: imageUrl, name: imageName };
    this.store.dispatch(addImage({ image }));
  }

}
