import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { EditService } from 'src/app/service/edit.service';
import { Persona } from 'src/models/Interfaces';
import { Banner } from 'src/models/Interfaces';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
  showAddPersonas:boolean=false;
  subscription?:Subscription;
  
  
  personaList: Persona[] = [];
  bannerList: Banner[] = [];
  
  constructor(
    private personaService:PersonaService, 
    private editService:EditService,
    ) {
       this.subscription=this.editService.onTogglePersonas()
         .subscribe(value => this.showAddPersonas=value);
  }

  ngOnInit(): void {
      this.personaService.getAllPersonas().subscribe((personaList)=>(
      this.personaList=personaList
    ));
    this.personaService.getAllBanners().subscribe((banner)=>(
      this.bannerList=banner
    ))
    }
   
    AddPersona(persona: Persona){    
      this.personaService.AddPers(persona).subscribe((persona)=>( 
      this.personaList.push(persona))
    )}

    OntoggleAddPersonas (){
      this.editService.toggleAddPersonas();
    }
}