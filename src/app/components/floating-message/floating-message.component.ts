import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-message',
  templateUrl: './floating-message.component.html',
  styleUrls: ['./floating-message.component.scss']
})
export class FloatingMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let ScreenWidth = window.screen.width;
    let boxMessageCs = window.document.getElementById('box-message-cs');

    if(ScreenWidth < 540) {
      boxMessageCs?.classList.add('active') 
    }
    

  }

  btncs() {
    let boxMessageCs = window.document.getElementById('box-message-cs');

    boxMessageCs?.classList.add('active')
  }

  hiddenbox() {
    let boxMessageCs = window.document.getElementById('box-message-cs');
    boxMessageCs?.classList.remove('active')
  }

}
