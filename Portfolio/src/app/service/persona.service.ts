import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Persona, Acerca, Education, Experience, Proyectos, Skills, LogIn } from 'src/models/Interfaces';
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
  
  private apiUrl= 'http://localhost:5000/Persona'
  private apiUrl2='http://localhost:5000/Acerca'
  private apiUrl3='http://localhost:5000/Education'
  private apiUrl4='http://localhost:5000/Experience'
  private apiUrl5='http://localhost:5000/Proyectos'
  private apiUrl6='http://localhost:5000/Skills'
  private apiUrl7='http://localhost:5000/LogIn'


  constructor(private http:HttpClient, 
    private router:Router) { }

 //LogIn
  LogIn(email:string, password:string) {
    this.http.post(this.apiUrl7, {email: email, password: password})
    .subscribe((resp:any) => {
      this.router.navigate(['/']);
      this.http.post<LogIn>(this.apiUrl7, httpOptions);
    })
  }

  //Acerca
  getAcerca(): Observable<Acerca[]> {
    return this.http.get<Acerca[]>(this.apiUrl2)
  }

  deleteAcerca(acerca: Acerca): Observable<Acerca>{
    console.log(acerca.id)
    const url=`${this.apiUrl2}/${acerca.id}`
    return this.http.delete<Acerca>(url);
  }

  AddAcerca(acerca: Acerca): Observable<Acerca>{
    return this.http.post<Acerca>(this.apiUrl2,acerca,httpOptions);
  }

  UpdateAcerca(acerca: Acerca): Observable<Acerca>{
    return this.http.put<Acerca>(this.apiUrl2, acerca, httpOptions);
  }

  //Personas
  getAllPersonas():  Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl)
  }
  
  deletePersonas(persona: Persona): Observable<Persona>{
    console.log(persona.id)
    const url=`${this.apiUrl}/${persona.id}`
    return this.http.delete<Persona>(url);
  }
  

  AddPers(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.apiUrl,persona,httpOptions);
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
