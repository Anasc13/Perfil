import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.css']
})

export class ItemPersonaComponent implements OnInit {
  @Input()  persona: Persona= { nombre:"", apellido:"", mail:"", position:"", ubication:"", companyName:"", companyImg:"", companyUrl:"" }
  @Output() OnDeletePersona: EventEmitter<Persona> = new EventEmitter()
  @Output() onEditPersona: EventEmitter<Persona> = new EventEmitter();


  faTrash = faTrash;
  id?:number;
  nombre=this.persona.nombre;
  apellido=this.persona.apellido;
  mail=this.persona.mail;
  position=this.persona.position;
  ubication=this.persona.ubication;
  companyName=this.persona.companyName;
  companyImg=this.persona.companyImg;
  companyUrl=this.persona.companyUrl;
  subscription?: Subscription;
  showEditPersonas: boolean = false;

  constructor( private editService: EditService) {
      this.subscription = this.editService.onToggleEditPersonas()
                              .subscribe(value => this.showEditPersonas = value )
     } 
  
  ngOnInit(): void {
  }

  onDelete(persona: Persona) {
    this.OnDeletePersona.emit(persona);
  }  

  onSubmit(persona: Persona){
    this.onEditPersona.emit(persona);
  }  
  
  onToggleEditPersonas(){
    this.editService.toggleEditPersonas();
    }

}
