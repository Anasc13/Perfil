import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Education } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.css']
})
export class ItemEducacionComponent implements OnInit {
  @Output() OnDeleteEducation: EventEmitter<Education> = new EventEmitter()
  @Input()  education: any;
  
  faTrash = faTrash;
 
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(education: Education) {
    this.OnDeleteEducation.emit(education);
  }

}
