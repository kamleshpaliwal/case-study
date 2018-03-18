import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CaseStudyFinishComponent} from "./case-study-finish/case-study-finish.component";
import {QuestionComponent} from "./question/question.component";


export const routes:Routes = [
    {path: '', component: QuestionComponent},
    {
        path: 'case-study-done',
        component: CaseStudyFinishComponent
    }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
