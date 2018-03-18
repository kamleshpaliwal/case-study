import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';





import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {QuestionViewComponent} from './question-view/question-view.component';
import {QuestionsSideBarComponent} from './questions-side-bar/questions-side-bar.component';
import {QuestionComponent} from './question/question.component';
import {CaseStudyService} from "./app-services/case-study.service";
import {HttpClientHelper} from './app.httpClient';
import {AuthenticationHelper} from "./app.authentication";
import {DataService} from "./app-services/data.service";
import { CaseStudyFinishComponent } from './case-study-finish/case-study-finish.component';
import {RouterModule} from "@angular/router";
import {routing} from './app.routing';
import {CKEditorModule} from "ngx-ckeditor/lib/src/ck-editor.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        QuestionViewComponent,
        QuestionsSideBarComponent,
        QuestionComponent,
        CaseStudyFinishComponent
    ],
    imports: [
        BrowserModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatButtonModule,
        MatDividerModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        CKEditorModule,
        routing,
    ],
    providers: [
        CaseStudyService,
        HttpClientHelper,
        AuthenticationHelper,
        DataService

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
