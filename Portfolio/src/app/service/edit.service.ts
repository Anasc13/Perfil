import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EditService {

  private showAddEducation:boolean = false;
  private subject = new Subject<any>();
  
  private showEditarAcerca:boolean = false;
  private subject1 = new Subject<any>();

  private showAddAcerca:boolean = false;
  private subject6 = new Subject<any>();

  private showAddPersonas:boolean = false;
  private subject2 = new Subject<any>();

  private showAddExperience:boolean = false;
  private subject3 = new Subject<any>();

  private showAddProyectos:boolean = false;
  private subject4 = new Subject<any>();

  private showAddSkills:boolean = false;
  private subject5 = new Subject<any>();
  

  constructor() { }

  //Education
  toggleAddEducation(): void {
    this.showAddEducation = !this.showAddEducation;
    this.subject.next(this.showAddEducation);
  }

  onToggleEducation(): Observable<any> {
    return this.subject.asObservable();
  }

  //Acerca
  toggleEditAcerca(): void {
    this.showEditarAcerca = !this.showEditarAcerca;
    this.subject1.next(this.showEditarAcerca);
  }

  onToggleEditAcerca(): Observable<any> {
    return this.subject1.asObservable();
  }

  toggleAddAcerca(): void {
    this.showAddAcerca = !this.showAddAcerca;
    this.subject6.next(this.showAddAcerca);
  }

  onToggleAddAcerca(): Observable<any> {
    return this.subject6.asObservable();
  }


  //Personas
  toggleAddPersonas(): void {
    this.showAddPersonas = !this.showAddPersonas;
    this.subject2.next(this.showAddPersonas);
  }

  onTogglePersonas(): Observable<any> {
    return this.subject2.asObservable();
  }

  //Experience
  toggleAddExperience(): void {
    this.showAddExperience = !this.showAddExperience;
    this.subject3.next(this.showAddExperience);
  }

  onToggleExperience(): Observable<any> {
    return this.subject3.asObservable();
  }

   //Experience
   toggleAddProyectos(): void {
    this.showAddProyectos = !this.showAddProyectos;
    this.subject4.next(this.showAddProyectos);
  }

  onToggleProyectos(): Observable<any> {
    return this.subject4.asObservable();
  }
    //Skills
    toggleAddSkills(): void {
      this.showAddSkills = !this.showAddSkills;
      this.subject5.next(this.showAddSkills);
    }
  
    onToggleSkills(): Observable<any> {
      return this.subject5.asObservable();
    } 
}
