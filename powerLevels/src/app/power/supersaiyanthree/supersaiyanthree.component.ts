import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupersaiyanthreeComponent implements OnInit {
  @Input() power;
  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power * 250;
  }
}
