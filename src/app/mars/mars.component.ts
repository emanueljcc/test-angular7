import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';

@Component({
  selector: 'test-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  marsImages: MarsImage[];
  cameras: string[] = ['MAST', 'CHEMCAM', 'NAVCAM'];
  currentCamera: string;

  // inyeccion de dependencias
  constructor(private servicio: NasaApiService) { }

  ngOnInit() {
    this.currentCamera = this.cameras[1];
    this.refreshView(this.currentCamera);
  }

  onSelectCamera(camera: string) {
    console.log(camera)
    this.refreshView(camera);
  }

  // PRIVATE funcion solo para este componente como el let
  private refreshView(camera: string){
    this.servicio.getMarsImages(camera)
      .subscribe(result => {
        console.log(result.photos);
        this.marsImages = result.photos;
      });
  }

}
