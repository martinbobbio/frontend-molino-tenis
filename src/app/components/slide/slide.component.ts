import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  constructor() { }

  mobile = false;

  ngOnInit() {
    var isMobile = window.matchMedia("only screen and (max-width: 960px)");
    if (isMobile.matches) {
        this.mobile = true;
    }
  }

}
