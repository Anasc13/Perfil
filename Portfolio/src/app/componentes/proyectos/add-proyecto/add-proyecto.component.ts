import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditService } from 'src/app/service/edit.service';
import { Proyectos } from 'src/models/Interfaces';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {
  @Output() onAddProyectos: EventEmitter<Proyectos> =new EventEmitter();

  id?: number
  img:string= '';
  name:string= '';
  description:string= '';
  start:string= '';
  finish:string= '';
  link:string= '';
  showAddProyectos: boolean = false;
  subscription?: Subscription;

  constructor(
    private editService: EditService,
  ) {
    this.subscription = this.editService.onToggleProyectos()
                              .subscribe(value => this.showAddProyectos = value )
   }

  ngOnInit(): void {
  }

  onSubmit(){
  if(this.name.length == 0){
    alert('Please add a school!');
    return
  }
  const { img, name, description, start, finish, link } = this
  const newProyecto = { img, name, description, start, finish, link }

  this.onAddProyectos.emit(newProyecto);
}

onToggleAddProyectos (){
  this.editService.toggleAddProyectos();
}
}
