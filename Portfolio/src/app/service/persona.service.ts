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

  //all
  public getAll(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }

  //Acerca
  public getAcerca(): Observable<Acerca[]> {
    return this.http.get<Acerca[]>(this.apiUrl+"acerca/traer");
  }

  public detailAcerca(acerca: Acerca): Observable<Acerca>{
    return this.http.get<Acerca>(this.apiUrl + `acerca/traer/${acerca.id}`);
  }

  public deleteAcerca(acerca: Acerca): Observable<any>{
    return this.http.delete<any>(this.apiUrl + `acerca/borrar/${acerca.id}`);
  }

  public AddAcerca(acerca: Acerca): Observable<any>{
    return this.http.post<any>(this.apiUrl+ "acerca/crear", acerca);
  }

  public UpdateAcerca(acerca: any): Observable<any>{
    return this.http.put(this.apiUrl + "acerca/editar", acerca);
  }

  //Personas
  public getAllPersonas():  Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl+"personas/traer")
  }
  
  public detailPersonas(persona: Persona): Observable<Persona>{
    return this.http.get<Persona>(this.apiUrl + `personas/traer/${persona.id}`);
  }

  public deletePersonas(persona: Persona): Observable<Persona>{
    return this.http.delete<any>(this.apiUrl + `personas/borrar/${persona.id}`);
  }

  public AddPersona(persona: Persona): Observable<Persona>{
    return this.http.post<any>(this.apiUrl+"personas/crear",persona);
  }

  public  UpdatePersona(persona: any): Observable<any>{
    return this.http.put(this.apiUrl + "personas/editar", persona);
  }

  //Education
  public getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl+"education/traer")
  }

  public detailEducation(education:Education): Observable<Education>{
    return this.http.get<Education>(this.apiUrl + `education/traer/${education.id}`);
  }

  public deleteEducation(education:Education): Observable<any>{
    return this.http.delete<any>(this.apiUrl + `education/borrar/${education.id}`)
  }

  public AddEducation(education:Education): Observable<any>{
    return this.http.post<any>(this.apiUrl+ "education/crear", education);
  }

  public UpdateEducation(education:any): Observable<any>{
    return this.http.put(this.apiUrl+ "education/editar", education);
  }

  //experience
  public getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl+"experience/traer")
  }

  public detailExperience(experience:Experience): Observable<Experience>{
    return this.http.get<Experience>(this.apiUrl + `experience/traer/${experience.id}`);
  }

  public deleteExperience(experience:Experience): Observable<any>{
    return this.http.delete<any>(this.apiUrl+ `experience/borrar/${experience.id}`);
  }

  public AddExperience(experience:Experience): Observable<any>{
    return this.http.post<any>(this.apiUrl+"experience/crear", experience);
  }

  public UpdateExperience(experience:any): Observable<any>{
    return this.http.put(this.apiUrl+ "experience/editar", experience);
  }

  //Proyectos
  public getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.apiUrl+"proyecto/traer");
  }

  public detailProyectos(proyecto:Proyectos): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.apiUrl + `proyecto/traer/${proyecto.id}`);
  }

  public deleteProyectos(proyecto:Proyectos): Observable<any>{
    return this.http.delete<any>(this.apiUrl + `proyecto/borrar/${proyecto.id}`);
  }

  public AddProyectos(proyecto:Proyectos): Observable<any>{
    return this.http.post<any>(this.apiUrl + "proyecto/crear", proyecto);
  }

  public UpdateProyectos(proyecto:any): Observable<any>{
    return this.http.put(this.apiUrl + "proyecto/editar", proyecto);
  }

  //Skills
  public getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiUrl + "skills/traer")
  }

  public detailSkills(skill:Skills): Observable<Skills>{
    return this.http.get<Skills>(this.apiUrl + `skills/traer/${skill.id}`);
  }

  public deleteSkills(skill:Skills): Observable<any>{
    return this.http.delete<any>(this.apiUrl + `skills/borrar/${skill.id}`);
  }

  public AddSkills(skill:Skills): Observable<any>{
    return this.http.post<any>(this.apiUrl + "skills/crear", skill);
  }

  public UpdateSkills(skill:any): Observable<any>{
    return this.http.put(this.apiUrl + "skills/editar", skill);
  }
}