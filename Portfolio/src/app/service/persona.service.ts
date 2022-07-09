import { Injectable } from '@angular/core';
import { Persona } from 'src/models/Persona'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas: Persona[] = []

  constructor() { }

  getAllPersonas(): Persona[] {
    let persona1 = new Persona (
      "assets/Images/bosques2.png",
      "assets/Images/Perfil_circle.JPG",
      "Ana", 
      "Santa Cruz",
      "anasantacruz13@gmail.com",
      "Analista de datos",
      "Salta (Argentina)",
      "OVcM",
      "assets/Images/Logo_ovcm.png",
      "http://ovcmsalta.gob.ar/")
    this.personas.push(persona1)
    
    return this.personas
    }

    AddPersona(personas: Persona): void {
      // TODO implement logic to remove a Persona
    }

}
