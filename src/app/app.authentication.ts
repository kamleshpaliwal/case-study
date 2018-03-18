import {Injectable, EventEmitter, Output} from '@angular/core';

@Injectable()
export class AuthenticationHelper {
    private token: string = 'token';

    @Output() indexEvent = new EventEmitter<number>();


    setToken(tokenData) {
        localStorage.setItem(this.token, tokenData.access_token);
    }

}