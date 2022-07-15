import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EditService } from 'src/app/service/edit.service'
import { Subscription } from 'rxjs';
import { Persona } from 'src/models/Interfaces';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})

export class EditPersonaComponent implements OnInit {
  @Output() OnAddPersona: EventEmitter<Persona> =new EventEmitter();
  
  subscription?: Subscription;
  showAddPersonas: boolean = false;
  
  nombre: string='';
  apellido: string='';
  mail: string='';
  position: string='';
  ubication: string='';
  companyName: string='';
  companyImg:string='';
  companyUrl: string='';
    
  constructor(
    private editService:EditService) 
  { this.subscription = this.editService.onTogglePersonas()
    .subscribe(value => this.showAddPersonas = value ) }
  
  ngOnInit(): void {
  }

  onSubmit(){
    const {nombre, apellido, mail, position, ubication, companyName, companyImg, companyUrl} =this;
    const addPersona= {nombre, apellido, mail, position, ubication, companyName, companyImg, companyUrl};
    console.log(addPersona);

    this.OnAddPersona.emit(addPersona);
  }

}
