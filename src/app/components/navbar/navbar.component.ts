import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {

    let prevScrollpos = window.pageYOffset;
      window.onscroll = ()=> {
      let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          window.document.getElementById('navbar')?.classList.remove('is-scrolled');
          // document.getElementById("navbar").classList.remove('is-scrolled');
        } else {
        //  window.document.getElementById("navbar").classList.add('is-scrolled');
        window.document.getElementById('navbar')?.classList.add ('is-scrolled');

        }
        prevScrollpos = currentScrollPos;
      }
  
    }

  scrollToFasilitas() {
    window.document.getElementById("fasilitas")?.scrollIntoView({behavior:'smooth'});
  }

  scrollToAboutMe() {
    window.document.getElementById("aboutme")?.scrollIntoView({behavior:'smooth'});

  }


}
