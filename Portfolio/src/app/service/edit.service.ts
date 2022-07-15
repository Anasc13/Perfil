import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EditService {

  private showAddEducation:boolean = false;
  private subjet = new Subject<any>();
  
  private showAddAcerca:boolean = false;
  private subjet1 = new Subject<any>();

  private showAddPersonas:boolean = false;
  private subjet2 = new Subject<any>();

  constructor() { }

  //Education
  toggleAddEducation(): void {
    this.showAddEducation = !this.showAddEducation;
    this.subjet.next(this.showAddEducation);
  }

  onToggleEducation(): Observable<any> {
    return this.subjet.asObservable();
  }

  //Acerca
  toggleAddAcerca(): void {
    this.showAddAcerca = !this.showAddAcerca;
    this.subjet1.next(this.showAddAcerca);
  }

  onToggleAcerca(): Observable<any> {
    return this.subjet1.asObservable();
  }

  //Personas
  toggleAddPersonas(): void {
    this.showAddPersonas = !this.showAddPersonas;
    this.subjet2.next(this.showAddPersonas);
  }

  onTogglePersonas(): Observable<any> {
    return this.subjet2.asObservable();
  }

}
