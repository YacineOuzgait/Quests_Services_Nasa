import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

constructor(
  public http: HttpClient
  ) { }

  getImageOfTheDay() : Observable<string>{
    let result =  this.http.get<string>('https://api.nasa.gov/planetary/apod?api_key=j9RysxtJfSehG3kRV9iff9QVEbPiRpPGbgwTrNNl');
    let traitement = (param: any) => {
      return param.hdurl as string
    }

    return result.pipe( map(traitement))
  }
}
