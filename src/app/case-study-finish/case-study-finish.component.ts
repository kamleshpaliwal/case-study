import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study-finish',
  templateUrl: './case-study-finish.component.html',
  styleUrls: ['./case-study-finish.component.scss']
})
export class CaseStudyFinishComponent implements OnInit {

  constructor() {
    localStorage.clear();
  }

  ngOnInit() {
  }

}
