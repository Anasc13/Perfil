import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Proyectos } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})

export class ItemProyectoComponent implements OnInit {
  @Output() OnDeleteProyectos: EventEmitter<Proyectos> = new EventEmitter();
  @Output() OnEditProyectos: EventEmitter<Proyectos> = new EventEmitter();
  @Input()  proyecto: Proyectos= { name:"", description:"", img:"", start:"", finish:"", link:"" }

  faTrash = faTrash;
  
  id?:number;
  name=this.proyecto.name;
  description=this.proyecto.description;
  img=this.proyecto.img;
  start=this.proyecto.start;
  finish=this.proyecto.finish;
  link=this.proyecto.link;

  subscription?: Subscription;
  showEditProyectos: boolean = false;

  constructor(private editService: EditService) {
      this.subscription = this.editService.onToggleEditProyectos()
                              .subscribe(value => this.showEditProyectos = value )
  }

  ngOnInit(): void {
  }
  
  onDelete(proyecto: Proyectos) {
    this.OnDeleteProyectos.emit(proyecto);
  }
  onSubmit(){
    if(this.name.length == 0){
      alert('Agregue institución!');
      return
    }
    const { name, description, img, start, finish, link } = this;
    const newProyecto = { name, description, img, start, finish, link };
    this.OnEditProyectos.emit(newProyecto);
  }  
  
  onToggleEditProyectos(){
    this.editService.toggleEditProyectos();
    }

}
