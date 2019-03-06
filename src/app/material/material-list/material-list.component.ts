import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';

@Component({
  selector: 'test-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;
  listaEstudiantes: Estudiante[];

  constructor() { }

  ngOnInit() {

    console.log('Inicializando el componente MaterialList');

    this.estudiante1 = {
      id: 1,
      nombre: 'emanuel castillo',
      ciudad: 'coro',
      fotoURL: 'https://www.peektimedev.com/images/arnold-avatar.jpg'
    };

    this.estudiante2 = {
      id: 2,
      nombre: 'zoan caldera',
      ciudad: 'caracas',
      fotoURL: 'http://images2.fanpop.com/image/polls/457000/457119_1275508934654_full.jpg?v=1275508943'
    };

    this.estudiante3 = {
      id: 2,
      nombre: 'emma castillo',
      ciudad: 'merida',
      fotoURL: 'https://www.peektimedev.com/images/arnold-avatar.jpg'
    };

    this.listaEstudiantes = [
      this.estudiante1,
      this.estudiante2,
      this.estudiante3
    ];

    setTimeout(() => {
      // console.log(this.listaEstudiantes[2]);
      this.listaEstudiantes[2] = {
        id: 4,
        nombre: 'juana lopez',
        ciudad: 'santiago'
      }
    }, 3000);

  } // fin ngOnInit

  onMouseClick($event: Estudiante) {
    console.log('click on: ', $event.nombre);
  }
}
