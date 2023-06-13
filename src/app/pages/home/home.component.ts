import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addImage } from 'src/app/redux/image.actions';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  
  constructor(  private store: Store,
                private dataService: DataApiService) { }

  ngOnInit(){
  
    this.dataService.getImagesAPI().subscribe({
      
      next:(response: any)=>{
        console.log("response", response);

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
