import { Component, OnInit } from '@angular/core';
import {AuthenticationHelper} from "../app.authentication";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  finishPage: boolean = true;

  constructor(private authentication:AuthenticationHelper, private router:Router) {
    if(window.location.hash === '#/case-study-done'){
      this.finishPage =  false;
    }

  }

  ngAfterViewInit() {
    this.authentication.getFinish().subscribe(item => {
      console.log('item',item);
      if(item === 'case-study-done'){
        this.finishPage = false;
      }
    });
  }

  finishCaseStudy() {
    this.router.navigate(['case-study-done']);
    this.authentication.setFinish('case-study-done')
  }

}
