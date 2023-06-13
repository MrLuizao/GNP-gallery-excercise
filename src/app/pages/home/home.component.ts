import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { addImage } from 'src/app/redux/image.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
})
export class HomeComponent {

  
  constructor(private store: Store) { }

  ngOnInit(){

  }


  addNewImage(imageUrl: string, imageName: string) {
    const image = { url: imageUrl, name: imageName };
    this.store.dispatch(addImage({ image }));
  }

}
