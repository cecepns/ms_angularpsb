import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-excellence',
  templateUrl: './excellence.component.html',
  styleUrls: ['./excellence.component.scss']
})
export class ExcellenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
        992: {
            spaceBetween: 20,
            slidesPerView: '3',
        }
    }
}


  onSwiper() {
    console.log('onswiper');
  }
  onSlideChange() {
    console.log('slide change');
  }

}
