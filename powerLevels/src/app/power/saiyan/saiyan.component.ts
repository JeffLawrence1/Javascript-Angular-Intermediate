import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaiyanComponent implements OnInit {
  @Input() power;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.power = this.power * 10;
  }

}
