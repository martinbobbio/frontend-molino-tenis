import { Component, OnInit } from '@angular/core';

declare var Swiper:any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    setTimeout(function(){
      let swiper = new Swiper ('.swiper-container.swiper-carousel', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        loop:false,
        spaceBetween: 0,
        slidesPerView: 1,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        });
      },1);

  }

}
