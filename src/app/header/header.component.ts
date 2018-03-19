import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  finishPage: boolean = true;

  constructor() {
    if(window.location.hash === '#/case-study-done'){
      this.finishPage =  false;
    }
  }

  ngOnInit() {
  }

}
