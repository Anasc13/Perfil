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
     // Like Promise
    this.personaService.getAllPersonas().subscribe((personas)=>(
      this.personas = personas
    ));
    }
    
  AddPersona (persona: Persona){
    this.personaService.AddPersona(persona).subscribe((persona)=>( 
      this.personas.push(persona))
    )
  }
}
