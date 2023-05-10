import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private message$: BehaviorSubject<string> = new BehaviorSubject<string>('Hello');

  //public messageObs$: Observable<string> = this.message$.asObservable();
  
  constructor() { }

  public setMessage(message: string) {
    this.message$.next(message);
  }

  public getMessage(): Observable<string> {
    return this.message$.asObservable();
  }

  
}
