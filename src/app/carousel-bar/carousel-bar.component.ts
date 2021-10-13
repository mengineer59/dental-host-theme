import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-bar',
  templateUrl: './carousel-bar.component.html',
  styleUrls: ['./carousel-bar.component.css']
})
export class CarouselBarComponent implements OnInit {

  images = [
    '../assets/images/carousel1.jpg', 
    '../assets/images/carousel2.jpg', 
    '../assets/images/carousel3.jpg'
  ];    
  slideOptions = { 
    items: 1, 
    dots: true, 
    nav: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
