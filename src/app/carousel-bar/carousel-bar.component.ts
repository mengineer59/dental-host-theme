import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-bar',
  templateUrl: './carousel-bar.component.html',
  styleUrls: ['./carousel-bar.component.css']
})
export class CarouselBarComponent implements OnInit {

  images = [
    './assets/images/carousel1.png', 
    './assets/images/carousel2.png', 
    './assets/images/carousel3.png'
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
