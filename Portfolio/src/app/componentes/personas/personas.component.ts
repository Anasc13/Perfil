import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/models/Interfaces';
import { Banner } from 'src/models/Interfaces';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  @Input() persona: any;
  personaAeditar: Persona= { nombre: "", apellido: "", mail: "", position: "", ubication: "", companyName: "", companyImg:"", companyUrl: "" };
  showEditPersona:boolean=false;
  subscription?:Subscription;
  indice:number = -1;
  faEdit = faEdit;
  
  personaList: Persona[] = [];
  bannerList: Banner[] = [];
  
  constructor(
    private personaService:PersonaService, 
    private editService:EditService,
    ) {
       this.subscription=this.editService.onToggle()
         .subscribe(value => this.showEditPersona=value);
  }

  ngOnInit(): void {
      this.personaService.getAllPersonas().subscribe((personas)=>(
      this.personaList=personas
    ));
    this.personaService.getAllBanners().subscribe((banner)=>(
      this.bannerList=banner
    ))
    }

    editPersona(persona: Persona){
      this.indice = this.personaList.indexOf(persona);
      this.personaAeditar=persona;
      this.editService.toggleEditPersona();
      console.log(this.showEditPersona);
      console.log(this.indice, this.personaList[this.indice].id, persona);
    }
  
    editarPersona(persona: Persona){
      console.log(persona, persona.id);
      this.personaService.UpdatePersona(persona, this.indice).subscribe((t)=> 
        this.personaList[this.indice]=persona);
      this.editService.toggleEditPersona();
    }
  }  
