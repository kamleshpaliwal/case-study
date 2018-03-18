import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import {HttpClientHelper} from "../app.httpClient";

@Injectable()
export class CaseStudyService {
    private httpClient: HttpClientHelper;
    private getAllQuestions:string = 'case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions';
    private getTokenUrl:string = 'oauth/token.json';
    

    constructor(httpClient: HttpClientHelper) {
        this.httpClient = httpClient;
    }

    getQuestions():Observable<any> {
        return this.httpClient.get(this.getAllQuestions);
    }

    //To change status of a product API.
    getToken(authorizationData): Observable<any> {
        return this.httpClient.post(this.getTokenUrl, authorizationData);
    }

    private extractResponse(res) {
        return res;
    }
    
    private handleError(error) {
        return Observable.throw(error);
    }

}
