import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllImagesComponent } from './all-images/all-images.component';
import { ImageGalleryComponentComponent } from './image-gallery-component/image-gallery-component.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllImagesComponent,
    ImageGalleryComponentComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports:[
    AllImagesComponent,
    ImageGalleryComponentComponent
  ]
})
export class ComponentsModule { }
