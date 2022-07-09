import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/models/Persona'
import { PersonaService } from 'src/app/service/persona.service'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = []

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.getAllPersonas()
     //let persona1 = new Persona (
     // "assets/Images/bosques2.png",
     // "assets/Images/Perfil_circle.JPG",
     // "Ana", 
     // "Santa Cruz",
     // "anasantacruz13@gmail.com",
     // "Analista de datos",
     // "Salta (Argentina)",
     // "OVcM",
     // "assets/Images/Logo_ovcm.png",
     // "http://ovcmsalta.gob.ar/")
    }

    getAllPersonas():void {
      this.personas = this.personaService.getAllPersonas()
      }
      
    AddPersona (personasparaAgregar: Persona){
      this.personaService.AddPersona(personasparaAgregar)
  }
}
