import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  @Input() header: string;
  @Input() subHeader: string;

  constructor() { 
    this.header="";
    this.subHeader="";
  }

  ngOnInit(): void {
  }

}
