import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobile = false;

  constructor() { }

  ngOnInit() {
    var isMobile = window.matchMedia("only screen and (max-width: 960px)");
    if (isMobile.matches) {
        this.mobile = true;
    }
  }

}
