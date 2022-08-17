import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/models/Interfaces';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
  personaList: Persona[] = [];
  id:number=0;
     
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
      this.personaService.getAllPersonas().subscribe((personaList)=>(
      this.personaList=personaList
    ));
    }
    
    LoadPersona(): void {
      this.personaService.getAllPersonas().subscribe(personaList => {this.personaList = personaList;})
    }

    AddPersona(persona: Persona){    
      this.personaService.AddPersona(persona).subscribe((personaList)=>{
        this.LoadPersona();
    })
  }

    EditarPersona (persona: Persona){
      this.personaService.UpdatePersona(persona).subscribe((personaList)=>{
        this.LoadPersona();
    })
    }

      
    deletePersonas(persona: Persona){
      this.personaService.deletePersonas(persona)
      .subscribe((personaList)=>{
        this.LoadPersona();
    })
    }
}