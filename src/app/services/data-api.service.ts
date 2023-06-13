import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private httpClient: HttpClient) { }

  getImagesAPI(){
    return this.httpClient.get("https://akabab.github.io/starwars-api/api/all.json");
  }

}
