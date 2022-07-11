import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service'
import { Persona } from 'src/models/Persona'

@Component({
  selector: 'app-item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.css']
})
export class ItemPersonaComponent implements OnInit {
  @Input() personaList: Persona[] = [];

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
