import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private showAddPersona:boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  toggleAddPersona(): void {
    this.showAddPersona = !this.showAddPersona;
    this.subjet.next(this.showAddPersona);
  }

  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}
