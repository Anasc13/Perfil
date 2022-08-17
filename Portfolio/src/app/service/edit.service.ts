import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  //Add
  private showAddAcerca:boolean = false;
  private subject6 = new Subject<any>();

  private showAddPersonas:boolean = false;
  private subject2 = new Subject<any>();
 
  private showAddEducation:boolean = false;
  private subject = new Subject<any>();

  private showAddExperience:boolean = false;
  private subject3 = new Subject<any>();

  private showAddProyectos:boolean = false;
  private subject4 = new Subject<any>();

  private showAddSkills:boolean = false;
  private subject5 = new Subject<any>();
  
  //Edit
  private showEditarAcerca:boolean = false;
  private subject1 = new Subject<any>();

  private showEditPersonas:boolean = false;
  private subject7 = new Subject<any>();  

  private showEditEducation:boolean = false;
  private subject8 = new Subject<any>();

  private showEditExperience:boolean = false;
  private subject9 = new Subject<any>();

  private showEditProyectos:boolean = false;
  private subject10 = new Subject<any>();

  private showEditSkills:boolean = false;
  private subject11 = new Subject<any>();

  constructor() { }

  //Education
  toggleAddEducation(): void {
    this.showAddEducation = !this.showAddEducation;
    this.subject.next(this.showAddEducation);
  }

  onToggleAddEducation(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleEditEducation(): void {
    this.showEditEducation = !this.showEditEducation;
    this.subject8.next(this.showEditEducation);
  }

  onToggleEditEducation(): Observable<any> {
    return this.subject8.asObservable();
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

  onToggleAddPersonas(): Observable<any> {
    return this.subject2.asObservable();
  }

  toggleEditPersonas(): void {
    this.showEditPersonas = !this.showEditPersonas;
    this.subject7.next(this.showEditPersonas);
  }

  onToggleEditPersonas(): Observable<any> {
    return this.subject7.asObservable();
  }

  //Experience
  toggleAddExperience(): void {
    this.showAddExperience = !this.showAddExperience;
    this.subject3.next(this.showAddExperience);
  }

  onToggleAddExperience(): Observable<any> {
    return this.subject3.asObservable();
  }

  toggleEditExperience(): void {
    this.showEditExperience = !this.showEditExperience;
    this.subject9.next(this.showEditExperience);
  }

  onToggleEditExperience(): Observable<any> {
    return this.subject9.asObservable();
  }

  //Proyectos
   toggleAddProyectos(): void {
    this.showAddProyectos = !this.showAddProyectos;
    this.subject4.next(this.showAddProyectos);
  }

  onToggleAddProyectos(): Observable<any> {
    return this.subject4.asObservable();
  }

  toggleEditProyectos(): void {
    this.showEditProyectos = !this.showEditProyectos;
    this.subject10.next(this.showEditProyectos);
  }

  onToggleEditProyectos(): Observable<any> {
    return this.subject10.asObservable();
  }

  //Skills
    toggleAddSkills(): void {
      this.showAddSkills = !this.showAddSkills;
      this.subject5.next(this.showAddSkills);
    }
  
    onToggleAddSkills(): Observable<any> {
      return this.subject5.asObservable();
    } 

    toggleEditSkills(): void {
      this.showEditSkills = !this.showEditSkills;
      this.subject11.next(this.showEditSkills);
    }
  
    onToggleEditSkills(): Observable<any> {
      return this.subject11.asObservable();
    } 
}