import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private showEditPersona:boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  toggleEditPersona(): void {
    this.showEditPersona = !this.showEditPersona;
    this.subjet.next(this.showEditPersona);
    console.log(this.showEditPersona);
  }

  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}
