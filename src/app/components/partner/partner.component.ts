import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  swiperConfigPartner: any = {
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
        992: {
            spaceBetween: 10,
            slidesPerView: '3',
        }
    }
}

}
