import {Component, OnInit, Input, AfterViewInit, Output, EventEmitter, SimpleChange, ViewChild} from '@angular/core';
import {DataService} from "../app-services/data.service";
import {Router} from "@angular/router";
import {CKEditorComponent} from "ngx-ckeditor/lib/src/ck-editor.component";
import {AuthenticationHelper} from "../app.authentication";


@Component({
    selector: 'app-question-view',
    templateUrl: './question-view.component.html',
    styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit,AfterViewInit {
    @Input() questionData:any = {};
    @Input() questionArrayLength:number;
    @Output() messageEvent = new EventEmitter<number>();
    lastQuestion:boolean = true;
    @ViewChild('ckEditor') ckEditor:CKEditorComponent;
    questionNumber:number = 0;
    editorValue:any = [];


    constructor(private data:DataService, private router:Router, private authentication:AuthenticationHelper) {

    }

    ngOnInit() {
        this.checkLastQuestion()
    }

    ngAfterViewInit() {
        const editor = this.ckEditor.instance;
        editor.config.toolbarGroups = [
            {name: 'document', groups: ['mode', 'document', 'doctools']},
            {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']}
        ];
    }

    ngOnChanges(changes:SimpleChange) {
        this.data.currentIndex.subscribe(index => this.questionNumber = index);

        if (this.questionNumber >= this.questionArrayLength - 1) {
            this.lastQuestion = false;
        } else {
            this.lastQuestion = true;
        }
    }
    

    // function to change selected question on press of next button.
    sendIndex() {
        this.questionNumber = this.questionNumber + 1;
        if (this.questionNumber > this.questionArrayLength - 1) {
            this.questionNumber = 0;
            this.lastQuestion = false;
        } else {
            this.messageEvent.emit(this.questionNumber)
        }
        this.data.changeIndex(this.questionNumber)
    }

    // function is called when user finishes the case study.
    finishCaseStudy() {
        this.router.navigate(['case-study-done']);
        this.authentication.setFinish('case-study-done')
    }

    // function to check whether index saved in local storage is last or not.
    checkLastQuestion() {
        if (localStorage.getItem('question-index')) {
            this.questionNumber = Number(localStorage.getItem('question-index'));
            let arraylength = Number(localStorage.getItem('question-array-length'));
            this.data.changeIndex(this.questionNumber)
            if (this.questionNumber >= arraylength - 1) {
                this.lastQuestion = false;
            } else {
                this.lastQuestion = true;
            }
        }
    }
}
