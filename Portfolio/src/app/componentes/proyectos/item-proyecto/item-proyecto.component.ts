import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Proyectos } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent implements OnInit {
  @Output() OnDeleteProyectos: EventEmitter<Proyectos> = new EventEmitter()
  @Input()  proyecto: any;
  
  faTrash = faTrash;
 
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(proyecto: Proyectos) {
    this.OnDeleteProyectos.emit(proyecto);
  }

}
