import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    
    let WrapperBottomAboutMe = window.document.getElementById('aboutme')?.offsetHeight || '',
        WrapperTopFasilitas = window.document.getElementById('fasilitas')?.offsetTop || '',
        WrapperBottomFasilitas = window.document.getElementById('fasilitas')?.offsetHeight || '';

    let prevScrollpos = window.pageYOffset;
      window.onscroll = ()=> {
      let currentScrollPos = window.pageYOffset;
      console.log(currentScrollPos)
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('navbar')?.classList.remove('is-scrolled');
          if (prevScrollpos >= 0 && prevScrollpos <= WrapperBottomAboutMe  ) {
            document.getElementById('link-aboutme')?.classList.add('is-active')
          } else {
            document.getElementById('link-aboutme')?.classList.remove('is-active')
          } if(prevScrollpos >= WrapperTopFasilitas ) {
            document.getElementById('link-fasilitas')?.classList.add('is-active')
          } else {
            document.getElementById('link-fasilitas')?.classList.remove('is-active')
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


}
