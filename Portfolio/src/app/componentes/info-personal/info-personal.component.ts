import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/models/Persona'

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {
  @Input() persona: any;
  @Output() AddPersona:EventEmitter<Persona> = new EventEmitter()
  

  constructor() { }
  
  ngOnInit(): void {
  }

  AgregarPersona(persona:Persona) {
    this.AddPersona.emit(persona)
 
}

}
