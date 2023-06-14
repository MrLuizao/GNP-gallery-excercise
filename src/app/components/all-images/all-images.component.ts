import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ImageApiI } from 'src/app/interfaces/image-interface';
import { DetailsComponent } from 'src/app/pages/modals/details/details.component';
import { addImage } from 'src/app/redux/image.actions';
import { DataApiService } from 'src/app/services/data-api.service';


@Component({
  selector: 'app-all-images',
  templateUrl: './all-images.component.html',
  styleUrls: ['./all-images.component.scss']
})

export class AllImagesComponent {

  imagesArray: ImageApiI[] = []
  imagesPaginated: ImageApiI[] = []
  itemsToView = 12; 
  pageCurrent = 1;
  searchTxt = ''; 

  constructor(  private store: Store,
                public dialog: MatDialog,
                private dataService: DataApiService) { }

  ngOnInit(){

    this.dataService.getImagesAPI().subscribe({
      
      next:(response: any): void=>{
        this.imagesArray = response
        this.setPagination();

      },
      error:(error)=>{
        console.error(error)
      }
    });
  }

  addImage(imageUrl: string, imageName: string) {
    const image = { url: imageUrl, name: imageName };
    this.store.dispatch(addImage({ image }));
  }

  openDialog(params: any) {    
    this.dialog.open(DetailsComponent, {
      data: params,
      id: "dialog-detais"
    });
  }


  setPagination() {
    let initialIndex = (this.pageCurrent - 1) * this.itemsToView;
    let lastIndex = initialIndex + this.itemsToView;
    this.imagesPaginated = this.imagesArray.slice(initialIndex, lastIndex);
  }
    
  nextPage() {
    this.pageCurrent++;
    this.setPagination();
  }

  prevPage() {
    if (this.pageCurrent > 1) {
      this.pageCurrent--;
      this.setPagination();
    }
  }

}
