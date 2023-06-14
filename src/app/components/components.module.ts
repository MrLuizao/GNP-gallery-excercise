import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllImagesComponent } from './all-images/all-images.component';
import { ImageGalleryComponentComponent } from './image-gallery-component/image-gallery-component.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AllImagesComponent,
    ImageGalleryComponentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule
  ],
  exports:[
    AllImagesComponent,
    ImageGalleryComponentComponent
  ]
})
export class ComponentsModule { }
