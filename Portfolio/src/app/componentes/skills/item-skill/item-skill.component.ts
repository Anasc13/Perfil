import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Skills } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-skill',
  templateUrl: './item-skill.component.html',
  styleUrls: ['./item-skill.component.css']
})
export class ItemSkillComponent implements OnInit {
  @Output() OnDeleteSkills: EventEmitter<Skills> = new EventEmitter()
  @Output() onEditSkills: EventEmitter<Skills> = new EventEmitter()
  @Input()  skill: Skills= { name:"", percentage: "" }
  
  showEditSkills: boolean = false;
  faTrash = faTrash;

  id=this.skill.id;
  name: string=this.skill.name;
  percentage: string=this.skill.percentage;
  
   
  subscription?: Subscription;
  
  constructor (private editService: EditService) {
      this.subscription = this.editService.onToggleEditSkills()
                              .subscribe(value => this.showEditSkills = value )
  }

  ngOnInit(): void {
  }
  
  onDelete(skill: Skills) {
    this.OnDeleteSkills.emit(skill);
  }

  onSubmit(skill: Skills) {
    if(this.name.length == 0){
      alert('Agregue habilidad!');
      return
    }
    const { name, percentage } = this
    const editSkill = { name, percentage }
    this.onEditSkills.emit(editSkill);
    this.showEditSkills!=this.showEditSkills;
  }  
  
  onToggleEditSkill(){
    this.editService.toggleEditSkills();
    }
}
