import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  toggleCollapse:string = "none";

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onToggleCollapse(){
    this.toggleCollapse = (this.toggleCollapse == "block" ? "none" : "block");
  }
  onCloseCollapse(){
    this.toggleCollapse="none";
  }
}
