import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.css']
})
export class ItemPersonaComponent implements OnInit {
  @Input()  persona: any;
  @Output() OnDeletePersona: EventEmitter<Persona> = new EventEmitter()
  
  
  faTrash = faTrash;
 
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(persona: Persona) {
    this.OnDeletePersona.emit(persona);
  }  

}
