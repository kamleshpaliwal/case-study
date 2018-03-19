import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {HTTP_CONFIG} from "./app.constant";
import {HttpClient,HttpHeaders, HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class HttpClientHelper {
    baseUrl: String = HTTP_CONFIG.baseUrl;

    constructor(private _http: HttpClient) {
        this._http = _http;
    }

    /**
     * function to create Authorization header.
     */
    createAuthorizationHeader() {
        let headers = {};
        headers['Authorization']='Bearer ' + localStorage.getItem('token');
        return headers;
    }

    /**
     * Performs a request with `get` http method.
     * @param url
     */
    get(url): Observable<any> {
        url = this.baseUrl + url;
        let headers = this.createAuthorizationHeader();
        headers['Content-Type'] = 'application/json';
        return this._http.get(url, {headers: headers})
            .map(this.extractResponse)
            .catch(this.handleError);
    }


    /**
     * Performs a request with `post` http method.
     * @param url
     * @param data
     */
    post(url, data): Observable<any> {
        let headers = this.createAuthorizationHeader();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        url = this.baseUrl + url;
        return this._http.post(url, data, {headers: headers})
            .map(this.extractResponse)
            .catch(this.handleError);
    }


    /**
     * Converts response into json.
     */
    extractResponse(res: Response) {
        const body = res;
        return body;
    }

    /**
     *  Handles error comming in response.
     */
    private handleError( error: Error | HttpErrorResponse): Observable<any> {
        let errorObject = {};
        if(error) {
             errorObject = {
                error_message: error['error'].error,
                status:error['status']
            }

        } else {
            errorObject ={
                error_message: 'Unexpected Error Occurred at Server'
            }  ;
        }
        return Observable.throw(errorObject || 'Server error');
    }
}

