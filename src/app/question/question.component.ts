import {Component} from '@angular/core';
import {CaseStudyService} from '../app-services/case-study.service';
import {AuthenticationHelper} from "../app.authentication";
import {APP_CONSTANTS} from "../constants/application.constants";

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
    question:any = {};
    messageIndex:number = 0;
    questionsArray:any = [];
    questionsLength:number;
    questionIndex:number = 0;
    loginData:any = APP_CONSTANTS.LOGIN_OBJECT.loginCredentials;

    constructor(private caseStudyService:CaseStudyService, private authentication:AuthenticationHelper) {
        this.getToken();
    }
    
    
    // To call function in case study seervice to get token.
    getToken() {
        let tokenCreationObject = this.loginData;
        this.caseStudyService.getToken(tokenCreationObject).subscribe(
            data => this.getTokenSuccess(data),
            error => this.getTokenFail(error)
        );
    }

    /**
     * if getTokenSuccess
     * @param result
     */
    getTokenSuccess(result) {
        if (result) {
            console.log('result', result);
            this.authentication.setToken(result);
            // To call function in case study service to get questions.
            this.caseStudyService.getQuestions().subscribe(
                data => this.getQuestionsSuccess(data),
                error => this.getQuestionsFail(error)
            );
        }
    }

    /**
     * if getTokenFail
     * @param err
     */
    getTokenFail(err) {
        
        if(err){
           alert(err)
        }
    }
    
    /**
     * if getQuestionsSuccess
     * @param result
     */
    getQuestionsSuccess(data) {
        this.questionsArray = data.user_company_case_study.company_case_study.questions;
        if(localStorage.getItem('question-index')){
            this.displayQuestion(localStorage.getItem('question-index'))
        }else{
            this.displayQuestion(this.messageIndex)
        }
    }
    
    /**
     * if getQuestionsFail
     * @param err
     */
    getQuestionsFail(err) {
        alert(err);

    }
    
    // function to display question on basis od passes index.
    displayQuestion(index) {
        localStorage.setItem('question-index', index);
        let questiontoPass = this.questionsArray[index];
        localStorage.setItem('question-array-length', this.questionsArray.length);
        this.questionsLength = this.questionsArray.length;
        this.question = questiontoPass;

    }

    //  function receives question index from specific question view component.
    receiveQuestionIndex($event) {
        this.messageIndex = $event;
        this.displayQuestion(this.messageIndex);
    }

    //  function receives question index from question side bar component.
    receiveIndex($event) {
            this.questionIndex = $event;
            this.displayQuestion(this.questionIndex);

    }

}
