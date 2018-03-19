import {Injectable, EventEmitter, Output} from '@angular/core';

@Injectable()
export class AuthenticationHelper {
    private token: string = 'token';

    @Output() finishEvent = new EventEmitter<any>();


    setToken(tokenData) {
        localStorage.setItem(this.token, tokenData.access_token);
    }

    // function to  emit event to indicate finish of the case-study.
    setFinish(value) {
        this.finishEvent.emit(value);
    }

    // function to  get the value from finish event.
    getFinish(): EventEmitter<any> {
        return this.finishEvent;
    }


}