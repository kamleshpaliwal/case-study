import {Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import { DataService } from "../app-services/data.service";

@Component({
  selector: 'app-questions-side-bar',
  templateUrl: './questions-side-bar.component.html',
  styleUrls: ['./questions-side-bar.component.scss']
})
export class QuestionsSideBarComponent {
  @Input() questionArrayLength: number;
  @Output() indexEvents = new EventEmitter<number>();
  folders:any = [];
  selectedQuestion: number = 0;

  constructor(private data: DataService) { }
  
  ngOnChanges(changes: SimpleChange){
    this.folders = Array.from(Array(this.questionArrayLength).keys());
    this.data.currentIndex.subscribe(index => this.selectedQuestion = index);
    
  }

  // function to pass index to change the selected question.
  passIndex(index){
    this.indexEvents.emit(index);
    this.data.changeIndex(index)
    this.selectedQuestion = index;
  }
}
