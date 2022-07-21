import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditService } from 'src/app/service/edit.service';
import { Skills } from 'src/models/Interfaces';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  @Output() onAddSkills: EventEmitter<Skills> =new EventEmitter();

  id?: number;
  name:string= '';
  percentage:number = 0;
  img:string= '';
  showAddSkills: boolean = false;
  subscription?: Subscription;

  constructor(
    private editService: EditService,
  ) {
    this.subscription = this.editService.onToggleAddSkills()
                              .subscribe(value => this.showAddSkills = value )
   }

  ngOnInit(): void {
  }

  onSubmit(){
  if(this.name.length == 0){
    alert('Please add a name!');
    return
  }
  const { name, percentage, img  }= this
  const newSkill = { name, percentage, img  }
  
  this.onAddSkills.emit(newSkill);
}

OnToggleAddSkills (){
  this.editService.toggleAddSkills();
}


}
