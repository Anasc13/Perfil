import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EditService } from 'src/app/service/edit.service'
import { Subscription } from 'rxjs';
import { Persona } from 'src/models/Persona';



@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  @Output() onAddPersona: EventEmitter<Persona> =new EventEmitter();

  nombre: string =""; 
  apellido: string ="";
  mail: string ="";
  position: string ="";
  ubication: string ="";
  companyUrl: string ="";
  companyName: string ="";
  showAddPersona: boolean = false;
  subscription?: Subscription;


  constructor(
    private editService:EditService) 
  {
    this.subscription = this.editService.onToggle()
      .subscribe(value => this.showAddPersona = value)
   }
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre.length==0){
      alert("Agrega un nombre!");
    }
    if(this.apellido.length==0){
      alert("Agrega un apellido!");
    }
    if(this.mail.length==0){
      alert("Agrega un e-mail!");
      return;
    }

    const {nombre, apellido, mail, position, ubication, companyUrl, companyName} =this;
    const newPersona= {nombre, apellido, mail, position,ubication,companyUrl,companyName};
    this.onAddPersona.emit(newPersona);
  }

}
