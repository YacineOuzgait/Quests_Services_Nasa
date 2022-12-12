import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

constructor(
  public http: HttpClient
  ) { }

  getImageOfTheDay() : Observable<string>{
    return this.http.get<string>('https://api.nasa.gov/planetary/apod?api_key=j9RysxtJfSehG3kRV9iff9QVEbPiRpPGbgwTrNNl');
  }
}
