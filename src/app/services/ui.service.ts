import { Injectable } from '@angular/core';

import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddButton:boolean=false;
  private subject=new Subject<any>();

  toggleAddTask(): void{
    console.log('toggling in ui service')
    this.showAddButton=!this.showAddButton;
    this.subject.next(this.showAddButton);

  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

  constructor() { }
}
