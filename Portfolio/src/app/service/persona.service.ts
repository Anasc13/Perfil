import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { Persona } from 'src/models/Persona'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})} 

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  private apiUrl='http://localhost:5001/persona'

  constructor(private http:HttpClient) { }

  getAllPersonas():  Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl)
  }
  
  AddPers(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.apiUrl,persona,httpOptions);
  }
}
