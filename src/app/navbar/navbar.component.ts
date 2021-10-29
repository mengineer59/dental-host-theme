import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleCollapse:string = "none";

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onToggleCollapse(){
    this.toggleCollapse = (this.toggleCollapse == "block" ? "none" : "block");
  }
}
