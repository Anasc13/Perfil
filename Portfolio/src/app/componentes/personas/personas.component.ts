import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service'
import { Persona } from 'src/models/Persona'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personaList: Persona[] = []

  constructor(private personaService:PersonaService) 
  { }

  ngOnInit(): void {
     // Like Promise
    this.personaService.getAllPersonas().subscribe((persona)=>(
      this.personaList = persona
    ));
    }
    
  AddPersona(persona: Persona){
    this.personaService.AddPers(persona).subscribe((pers)=>{
      this.personaList.push(pers);
      console.log(pers);})
  }
}


