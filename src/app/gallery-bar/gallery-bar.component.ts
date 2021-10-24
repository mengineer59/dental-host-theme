import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-bar',
  templateUrl: './gallery-bar.component.html',
  styleUrls: ['./gallery-bar.component.css']
})
export class GalleryBarComponent implements OnInit {

  images = [
    '../assets/images/16-min.jpg', 
    '../assets/images/31-min.jpg', 
    '../assets/images/33-min.jpg', 
    '../assets/images/19-min.jpg', 
    '../assets/images/34-min.jpg', 
    '../assets/images/24-min.jpg'
  ];    
  slideOptions = { 
    items: 4,
    dots: true, 
    nav: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
