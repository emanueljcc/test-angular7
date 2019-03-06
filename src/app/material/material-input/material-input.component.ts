import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'test-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario = {
    nombre: 'emanuel'
  };

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.usuario.nombre = 'juan';
    },3000);
  }

  onKeyUp($event){
    console.log('keyUp ',$event);
  }

  onBlur($event: FocusEvent){
    console.log('onBlur ',$event);
  }

}
