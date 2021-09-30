import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '2dental-host-theme';
  ngOnInit(){
    $(document).ready(function(){
      //alert("Ready!");              
    });
  }
}
