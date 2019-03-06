import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';

@Component({
  selector: 'test-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {

  readonly DEFAULT_PICTURE = 'https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg';

  @Input()
  estudiante: Estudiante;

  @Output()
  onMouseClick = new EventEmitter<Estudiante>()
  constructor() { }

  ngOnInit() {

  }


  onClick(e: Estudiante){
    this.onMouseClick.emit(e);
  }

}
