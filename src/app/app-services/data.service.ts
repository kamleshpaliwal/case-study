import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    private arrayIndexSource = new BehaviorSubject<number>(0);
    currentIndex = this.arrayIndexSource.asObservable();

    constructor() { }

    changeIndex(index: number) {
        this.arrayIndexSource.next(index)
    }

}
