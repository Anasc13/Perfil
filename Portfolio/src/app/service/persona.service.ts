import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona, Acerca, Education, Experience, Proyectos, Skills } from 'src/models/Interfaces';


@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
  apiUrl:string="https://be-mi-portfolio.herokuapp.com/";
  
  constructor(private http:HttpClient) { }

  //Acerca
  public getAcerca(): Observable<Acerca[]> {
    return this.http.get<Acerca[]>(this.apiUrl+"acerca/traer");
  }

  public deleteAcerca(acerca: Acerca): Observable<Acerca>{
    console.log(acerca.id)
    const url=`${this.apiUrl+"acerca/borrar"}/${acerca.id}`
    return this.http.delete<Acerca>(url);
  }

  public AddAcerca(acerca: Acerca): Observable<Acerca>{
    return this.http.post<Acerca>(this.apiUrl+"acerca/crear", acerca);
  }

  public UpdateAcerca(acerca: Acerca): Observable<Acerca>{
    return this.http.put<Acerca>(this.apiUrl+"acerca/editar", acerca);
  }

  //Personas
  public getAllPersonas():  Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl+"personas/traer")
  }
  
  public deletePersonas(persona: Persona): Observable<Persona>{
    console.log(persona.id)
    const url=`${this.apiUrl+"personas/borrar"}/${persona.id}`
    return this.http.delete<Persona>(url);
  }

  public AddPersona(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.apiUrl+"personas",persona);
  }

  public  UpdatePersona(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(this.apiUrl+"personas/editar", persona);
  }

  //Education
  public getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl+"education/traer")
  }

  public deleteEducation(education:Education): Observable<Education>{
    const url = `${this.apiUrl+"education/borrar"}/${education.id}`
    return this.http.delete<Education>(url)
  }

  public AddEducation(education:Education): Observable<Education>{
    return this.http.post<Education>(this.apiUrl+"education/crear", education);
  }

  public UpdateEducation(education:Education): Observable<Education>{
    return this.http.put<Education>(this.apiUrl+"education/editar", education);
  }

  //experience
  public getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl+"experience/traer")
  }

  public deleteExperience(experience:Experience): Observable<Experience>{
    const url = `${this.apiUrl+"experience/borrar"}/${experience.id}`
    return this.http.delete<Experience>(url)
  }

  public AddExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(this.apiUrl+"experience/crear", experience);
  }

  public UpdateExperience(experience:Experience): Observable<Experience>{
    return this.http.put<Experience>(this.apiUrl+"experience/editar", experience);
  }

  //Proyectos
  public getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.apiUrl+"proyecto/traer")
  }

  public deleteProyectos(proyecto:Proyectos): Observable<Proyectos>{
    const url = `${this.apiUrl+"proyecto/borrar"}/${proyecto.id}`
    return this.http.delete<Proyectos>(url)
  }

  public AddProyectos(proyecto:Proyectos): Observable<Proyectos>{
    return this.http.post<Proyectos>(this.apiUrl+"proyecto/crear", proyecto);
  }

  public UpdateProyectos(proyecto:Proyectos): Observable<Proyectos>{
    return this.http.put<Proyectos>(this.apiUrl+"proyecto/editar", proyecto);
  }

  //Skills
  public getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiUrl+"skills/traer")
  }

  public deleteSkills(skill:Skills): Observable<Skills>{
    const url = `${this.apiUrl+"skills/borrar"}/${skill.id}`
    return this.http.delete<Skills>(url)
  }

  public AddSkills(skill:Skills): Observable<Skills>{
    return this.http.post<Skills>(this.apiUrl+"skills/crear", skill);
  }

  public UpdateSkills(skill:Skills): Observable<Skills>{
    return this.http.put<Skills>(this.apiUrl+"skills/editar", skill);
  }

 
}
