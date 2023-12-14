import { Component, OnInit, ViewChild } from '@angular/core';

// Swiper Slider
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

/**
 * Index Component
 */
export class IndexComponent implements OnInit {
  constructor() { }


  ngOnInit(): void { }

  /**
  * Swiper Coverflow setting
  */
  Coverflow: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets', // Use "fraction" type for non-numeric bullets
    },
        autoplay: {
      delay: 5000, // Delay between slides in milliseconds (3 seconds)
      disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    effect:'fade',
  };

}
