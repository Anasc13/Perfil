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
  
  id?: number;
  nombre: string='';
  apellido: string='';
  mail: string='';
  position: string='';
  ubication: string='';
  companyName: string='';
  companyImg:string='';
  companyUrl: string='';
  subscription?: Subscription;
  showAddPersonas: boolean = false;

  constructor(
    private editService:EditService)  
  { this.subscription = this.editService.onToggleAddPersonas()
    .subscribe(value => this.showAddPersonas = value ) }
  
  ngOnInit(): void {
  }

  onSubmit(){
    const { nombre, apellido, mail, position, ubication, companyName, companyImg, companyUrl } =this;
    const addPersona= {nombre, apellido, mail, position, ubication, companyName, companyImg, companyUrl};
    console.log(addPersona);

    this.OnAddPersona.emit(addPersona);
  }

  OntoggleAddPersonas (){
    this.editService.toggleAddPersonas();
  }

}
