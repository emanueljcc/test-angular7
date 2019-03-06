import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  error: string;

  constructor(private nasaApi: NasaApiService) { }

  ngOnInit() {

    // conparentesis para el tipo de dato y no de erro porara que sea any
    this.nasaApi.getApod()
      .subscribe((data: Apod) => {
        setTimeout(() => {
          this.apod = data;
        }, 2000);
      }, err => {
        setTimeout(() => {
          console.log('Error al conectar con el servidor ', err);
          this.error = 'Error al conectar con el servidor';
        }, 2000);
      });
    // console.log('DATA ', this.apod);

  }

}
