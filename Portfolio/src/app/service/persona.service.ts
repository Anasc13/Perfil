import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Persona, Banner, Acerca, Education, Experience, Proyectos, Skills } from 'src/models/Interfaces'


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})} 

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
  private apiUrl1='http://localhost:5001/banner'
  private apiUrl='http://localhost:5001/persona'
  private apiUrl2='http://localhost:5001/acerca'
  private apiUrl3='http://localhost:5001/education'
  private apiUrl4='http://localhost:5001/experience'
  private apiUrl5='http://localhost:5001/proyectos'
  private apiUrl6='http://localhost:5001/skills'


  constructor(private http:HttpClient) { }

  //Banner
  getAllBanners():  Observable<Banner[]> {
    return this.http.get<Banner[]>(this.apiUrl1)
  }

  //Acerca
  getAcerca(): Observable<Acerca[]> {
    return this.http.get<Acerca[]>(this.apiUrl2)
  }

  //Personas
  getAllPersonas():  Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl)
  }
  
  getPersonas(id: number): Observable<Persona>{
    return this.http.get<Persona>(`${this.apiUrl}/${id}`)
  }

  UpdatePersona(persona: Persona, index: number): Observable<Persona>{
    return this.http.put<Persona>(`${this.apiUrl}/${index}`, persona, httpOptions);
  }

  AddPers(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.apiUrl, persona, httpOptions);
  }

  //Education
  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl3)
  }

  deleteEducation(education:Education): Observable<Education>{
    const url = `${this.apiUrl3}/${education.id}`
    return this.http.delete<Education>(url)
  }

  AddEducation(education:Education): Observable<Education>{
    return this.http.post<Education>(this.apiUrl3, education, httpOptions);
  }

  //experience
  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl4)
  }

  deleteExperience(experience:Experience): Observable<Experience>{
    const url = `${this.apiUrl4}/${experience.id}`
    return this.http.delete<Experience>(url)
  }

  AddExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(this.apiUrl4, experience, httpOptions);
  }

  //Proyectos
  getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.apiUrl5)
  }

  deleteProyectos(proyecto:Proyectos): Observable<Proyectos>{
    const url = `${this.apiUrl5}/${proyecto.id}`
    return this.http.delete<Proyectos>(url)
  }

  AddProyectos(proyecto:Proyectos): Observable<Proyectos>{
    return this.http.post<Proyectos>(this.apiUrl5, proyecto, httpOptions);
  }

  //Skills
  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiUrl6)
  }

  deleteSkills(skill:Skills): Observable<Skills>{
    const url = `${this.apiUrl6}/${skill.id}`
    return this.http.delete<Skills>(url)
  }

  AddSkills(skill:Skills): Observable<Skills>{
    return this.http.post<Skills>(this.apiUrl6, skill, httpOptions);
  }

}
