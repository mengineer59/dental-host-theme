import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dental-host-theme';
  ngOnInit(){    
    $(document).ready(function(){
      //alert("Ready!");              
    });
  }
}
