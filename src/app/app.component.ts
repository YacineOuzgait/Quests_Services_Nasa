import { Component } from '@angular/core';
import { NasaService } from './services/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imgOfTheDay: string = "";
  
  constructor(
    public nasaService: NasaService
  ) { }

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe(imageFromJsonFile => {
      this.imgOfTheDay = imageFromJsonFile
      console.log('test', this.imgOfTheDay)
    })
  }
}
