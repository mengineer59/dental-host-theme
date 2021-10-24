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
    loop: true,
    autoplay: true,
    dots: true, 
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
