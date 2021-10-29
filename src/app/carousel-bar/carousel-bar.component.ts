import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-bar',
  templateUrl: './carousel-bar.component.html',
  styleUrls: ['./carousel-bar.component.css']
})
export class CarouselBarComponent implements OnInit {

  images = [
    './assets/images/carousel1.webp', 
    './assets/images/carousel2.webp', 
    './assets/images/carousel3.webp'
  ];    
  slideOptions = { 
    items: 1, 
    loop: true,
    autoplay:true,
    dots: true, 
    nav: false
  };

  constructor() { }

  ngOnInit(): void {
  }

}
