import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Skills } from 'src/models/Interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skills: Skills= { name:"", percentage: ""}
  indice:number = -1;
  showEdicionSkill:boolean=false;
  skillsList: Skills[] = [];

 constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    // Like Promise
    this.personaService.getSkills().subscribe((skillsList)=>{
      this.skillsList = skillsList;
  });
  }

  deleteSkills(skill:Skills){
    this.personaService.deleteSkills(skill)
    .subscribe(()=>(
      this.skillsList = this.skillsList.filter
      (t => t.id !== skill.id )
    ))
  }

  AddSkills (skill:Skills){
  this.personaService.AddSkills(skill).subscribe((skill)=>( 
    this.skillsList.push(skill))
  )}

  EditarSkills (skill:Skills){
    this.personaService.UpdateSkills(skill).subscribe(()=>(
      this.skillsList = this.skillsList.filter
      (t => t.id !== skill.id )
    ))
  }
}
