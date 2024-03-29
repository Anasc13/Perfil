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
  @Input()  proyecto: Proyectos= { name:"", description:"", img:"", start:"", end:"", link:"" }

  faTrash = faTrash;
  
  id?:number;
  name:string=this.proyecto.name;
  description:string=this.proyecto.description;
  img:string=this.proyecto.img;
  start: string=this.proyecto.start;
  end: string=this.proyecto.end;
  link:string=this.proyecto.link;

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
  onSubmit(proyecto: Proyectos){
    this.OnEditProyectos.emit(proyecto);
  }  
  
  onToggleEditProyectos(){
    this.editService.toggleEditProyectos();
    }

}
