import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  a(): void {
    console.log(0);
  }
}
