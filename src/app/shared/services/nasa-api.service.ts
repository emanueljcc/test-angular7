import { Injectable } from '@angular/core';
import { Apod } from '../model/apod'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
const KEY = '?api_key=IjH1DRz0L7UljwZ6yrCqYeOP3He0m4Uib3tEiPxS';


@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  // dependency injection HttpClient
  constructor(private httpClient: HttpClient) { }
  // variable a usar [ httpClient ] -> this.httpClient.(aqui vienen las funciones)

  getApod(): Observable<Apod> {
    return this.httpClient.get<Apod>(`${APOD_URL}${KEY}`);
  }

  getMarsImages(camera: string): Observable<any> {
    return this.httpClient.get(`${MARS_URL}&camera=${camera}&api_key=IjH1DRz0L7UljwZ6yrCqYeOP3He0m4Uib3tEiPxS`);
  }
}
