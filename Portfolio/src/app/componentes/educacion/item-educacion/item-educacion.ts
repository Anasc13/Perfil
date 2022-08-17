import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Education } from 'src/models/Interfaces';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})

export class TasksItemComponent implements OnInit {
  @Input() education: Education = EDUCATIONS[0] 
  @Output() OnDeleteEducation: EventEmitter<Education> = new EventEmitter()
  
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(education: Education) {
    this.OnDeleteEducation.emit(education);
  }

}