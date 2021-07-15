import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    
    let WrapperBottomAboutMe = window.document.getElementById('aboutme')?.offsetHeight || 0,
        WrapperTopFasilitas = window.document.getElementById('fasilitas')?.offsetTop || 0,
        WrapperBottomFasilitas = window.document.getElementById('fasilitas')?.offsetHeight || 0,
        WrapperTopKeunggulan = window.document.getElementById('keunggulan')?.offsetTop || 0,
        WrapperBottomKeunggulan = window.document.getElementById('keunggulan')?.offsetHeight || 0
        ;



    let prevScrollpos = window.pageYOffset;
      window.onscroll = ()=> {
      let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('navbar')?.classList.remove('is-scrolled');
          if (prevScrollpos >= 0 && prevScrollpos <= WrapperBottomAboutMe   ) {
            document.getElementById('link-aboutme')?.classList.add('is-active')
          } else {
            document.getElementById('link-aboutme')?.classList.remove('is-active')
          } if(prevScrollpos >= WrapperTopFasilitas - 150 && prevScrollpos <= WrapperBottomFasilitas + WrapperTopFasilitas - 150 ) {
            document.getElementById('link-fasilitas')?.classList.add('is-active')
          } else {
            document.getElementById('link-fasilitas')?.classList.remove('is-active')
          } if(prevScrollpos >= WrapperTopKeunggulan - 150 && prevScrollpos <= WrapperBottomKeunggulan + WrapperTopKeunggulan ) {
            document.getElementById('link-keunggulan')?.classList.add('is-active')
          } else {
            document.getElementById('link-keunggulan')?.classList.remove('is-active')
          } 
        } else {
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

  scrollToExcellence() {
    window.document.getElementById("keunggulan")?.scrollIntoView({behavior:'smooth'});
  }


}
