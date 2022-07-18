import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Experience } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css']
})
export class ItemExperienciaComponent implements OnInit {
  @Output() OnDeleteExperience: EventEmitter<Experience> = new EventEmitter()
  @Input()  experience: any;
  
  faTrash = faTrash;
 
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(experience: Experience) {
    this.OnDeleteExperience.emit(experience);
  }


}
