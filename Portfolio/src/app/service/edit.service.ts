import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EditService {
  private showAdd:boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  toggleAdd(): void {
    this.showAdd = !this.showAdd;
    this.subjet.next(this.showAdd);
  }

  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}
