import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Registration } from './../registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
registration: Registration;

  constructor() { 
    this.registration = new Registration()
  }
create(){
  console.log("successfully registered!!");
}
  ngOnInit() {
  }

}
