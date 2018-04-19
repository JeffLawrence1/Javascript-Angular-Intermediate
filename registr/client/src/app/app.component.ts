import { Component } from '@angular/core';
import { Registration} from './registration';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registration = new Registration();
  registrations = [];
  onSubmit(){
    this.registrations.push(this.registration);
    this.registration = new Registration();
  }
}
