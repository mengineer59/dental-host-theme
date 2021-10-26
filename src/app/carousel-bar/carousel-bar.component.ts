import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-bar',
  templateUrl: './carousel-bar.component.html',
  styleUrls: ['./carousel-bar.component.css']
})
export class CarouselBarComponent implements OnInit {

  images = [
    './assets/images/test1.jpg', 
    './assets/images/test2.jpg', 
    './assets/images/test3.jpg'
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
