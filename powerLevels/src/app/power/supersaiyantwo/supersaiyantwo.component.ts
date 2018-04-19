import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupersaiyantwoComponent implements OnInit {
  @Input() power;
  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power * 150;
  }
}
