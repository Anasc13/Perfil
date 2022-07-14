import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service'
import { Persona } from 'src/models/Interfaces';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})

export class EditPersonaComponent implements OnInit {
  @Output() OnEditarPersona: EventEmitter<Persona> =new EventEmitter();
  @Input() showEditPersona: boolean = false;
  @Input() persAeditar: Persona= { nombre: "", apellido: "", mail: "", position: "", ubication: "", companyName: "", companyImg:"", companyUrl: "" };

  id=this.persAeditar.id;
  nombre: string=this.persAeditar.nombre;
  apellido: string=this.persAeditar.apellido;
  mail: string=this.persAeditar.mail;
  position: string=this.persAeditar.position;
  ubication: string=this.persAeditar.ubication;
  companyName: string=this.persAeditar.companyName;
  companyImg:string=this.persAeditar.companyImg;
  companyUrl: string=this.persAeditar.companyUrl;
  
  faEnvelope=faEnvelope
  
  constructor(
    private personaService:PersonaService) 
  { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    const {nombre, apellido, mail, position, ubication, companyName, companyImg, companyUrl} =this;
    const editPersona= {nombre, apellido, mail, position, ubication, companyName, companyImg, companyUrl};
    console.log(editPersona);
    this.OnEditarPersona.emit(editPersona);
    this.showEditPersona!=this.showEditPersona;
  }

}
