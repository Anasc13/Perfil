import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Skills } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.css']
})
export class ItemSkillComponent implements OnInit {
  @Output() OnDeleteSkills: EventEmitter<Skills> = new EventEmitter()
  @Input()  skill: any;
  
  faTrash = faTrash;
 
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(skill: Skills) {
    this.OnDeleteSkills.emit(skill);
  }

}
