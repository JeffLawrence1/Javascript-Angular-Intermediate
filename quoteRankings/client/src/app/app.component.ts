import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [{body: 'kljkjljlsjdflakjsdlfkjsl', author: 'sample', rating: 3}];

  createQuote(quote){
    console.log(quote);
    this.quotes.push(quote);
  }
  deleteQuote(quote){
    let idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }
}
