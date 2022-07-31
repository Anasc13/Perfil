import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona, Acerca, Education, Experience, Proyectos, Skills } from 'src/models/Interfaces';
import { Router } from '@angular/router'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
  apiUrl:string="http://localhost:8080"

  constructor(private http:HttpClient, 
    private router:Router) { }

  //Acerca
  getAcerca(): Observable<Acerca[]> {
    return this.http.get<Acerca[]>(this.apiUrl+"acerca")
  }

  deleteAcerca(acerca: Acerca): Observable<Acerca>{
    console.log(acerca.id)
    const url=`${this.apiUrl+"acerca"}/${acerca.id}`
    return this.http.delete<Acerca>(url);
  }

  AddAcerca(acerca: Acerca): Observable<Acerca>{
    return this.http.post<Acerca>(this.apiUrl+"acerca",acerca,httpOptions);
  }

  UpdateAcerca(acerca: Acerca): Observable<Acerca>{
    return this.http.put<Acerca>(this.apiUrl+"acerca", acerca, httpOptions);
  }

  //Personas
  getAllPersonas():  Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl+"persona")
  }
  
  deletePersonas(persona: Persona): Observable<Persona>{
    console.log(persona.id)
    const url=`${this.apiUrl+"persona"}/${persona.id}`
    return this.http.delete<Persona>(url);
  }

  AddPersona(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.apiUrl+"persona",persona,httpOptions);
  }

  UpdatePersona(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(this.apiUrl+"persona", persona, httpOptions);
  }

  //Education
  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl+"education")
  }

  deleteEducation(education:Education): Observable<Education>{
    const url = `${this.apiUrl+"education"}/${education.id}`
    return this.http.delete<Education>(url)
  }

  AddEducation(education:Education): Observable<Education>{
    return this.http.post<Education>(this.apiUrl+"education", education, httpOptions);
  }

  UpdateEducation(education:Education): Observable<Education>{
    return this.http.put<Education>(this.apiUrl+"education", education, httpOptions);
  }

  //experience
  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl+"experience")
  }

  deleteExperience(experience:Experience): Observable<Experience>{
    const url = `${this.apiUrl+"experience"}/${experience.id}`
    return this.http.delete<Experience>(url)
  }

  AddExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(this.apiUrl+"experience", experience, httpOptions);
  }

  UpdateExperience(experience:Experience): Observable<Experience>{
    return this.http.put<Experience>(this.apiUrl+"experience", experience, httpOptions);
  }

  //Proyectos
  getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.apiUrl+"proyectos")
  }

  deleteProyectos(proyecto:Proyectos): Observable<Proyectos>{
    const url = `${this.apiUrl+"proyectos"}/${proyecto.id}`
    return this.http.delete<Proyectos>(url)
  }

  AddProyectos(proyecto:Proyectos): Observable<Proyectos>{
    return this.http.post<Proyectos>(this.apiUrl+"proyectos", proyecto, httpOptions);
  }

  UpdateProyectos(proyecto:Proyectos): Observable<Proyectos>{
    return this.http.put<Proyectos>(this.apiUrl+"proyectos", proyecto, httpOptions);
  }

  //Skills
  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiUrl+"skills")
  }

  deleteSkills(skill:Skills): Observable<Skills>{
    const url = `${this.apiUrl+"skills"}/${skill.id}`
    return this.http.delete<Skills>(url)
  }

  AddSkills(skill:Skills): Observable<Skills>{
    return this.http.post<Skills>(this.apiUrl+"skills", skill, httpOptions);
  }

  UpdateSkills(skill:Skills): Observable<Skills>{
    return this.http.put<Skills>(this.apiUrl+"skills", skill, httpOptions);
  }

 
}
