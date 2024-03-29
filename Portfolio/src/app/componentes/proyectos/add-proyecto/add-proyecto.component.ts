import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditService } from 'src/app/service/edit.service';
import { Proyectos } from 'src/models/Interfaces';
import { Router } from '@angular/router';

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
  end:string= '';
  link:string= '';
  showAddProyectos: boolean = false;
  subscription?: Subscription;

  constructor(
    private editService: EditService, 
    private router: Router, 
  ) {
    this.subscription = this.editService.onToggleAddProyectos()
                              .subscribe(value => this.showAddProyectos = value )
   }

  ngOnInit(): void {
  }

  onSubmit(){
  if(this.name.length == 0){
    alert('Please add a school!');
    return
  }
  const { img, name, description, start, end, link } = this
  const newProyecto = { img, name, description, start, end, link }

  this.onAddProyectos.emit(newProyecto);
}

onToggleAddProyectos (){
  this.editService.toggleAddProyectos();
}

hasRoute(router: string){
  return this.router.url === router
}
}
