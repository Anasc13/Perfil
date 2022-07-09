import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditService } from 'src/app/service/edit.service'
import { Persona } from 'src/models/Persona'

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  @Output() onAddPersona: EventEmitter<Persona> =new EventEmitter();

  backImage:string = '';
  profileImage:string = '';
  nombre:string = ''; 
  apellido:string = '';
  mail: string = '';
  postition:string = '';
  ubication:string = '';
  companyName:string = '';
  companyImg:string = '';
  companyUrl:string = ''
  showAddPersona: boolean = false;
  subscription?: Subscription;

  constructor(private editService:EditService) 
    { 
      this.subscription = this.editService.onToggle()
      .subscribe(value => this.showAddPersona = value)
    }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nombre.length == 0){
      alert('Agrega un nombre!');
      return
    }
    if(this.apellido.length == 0){
      alert('Agrega un apellido!');
      return
    }
    if(this.mail.length == 0){
      alert('Agrega un e-mail!');
      return
    }
    const {backImage, profileImage, nombre, apellido, mail, postition, ubication, companyName, companyImg, companyUrl} = this
    
    const newPersona = {backImage, profileImage, nombre, apellido, mail, postition, ubication, companyName, companyImg, companyUrl }
  
    this.onAddPersona.emit(newPersona);
  }

}
