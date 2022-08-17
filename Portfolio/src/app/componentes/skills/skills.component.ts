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

  LoadSkills(): void {
    this.personaService.getSkills().subscribe(skillsList => { this.skillsList = skillsList; })
  }

  deleteSkills(skill:Skills){
    this.personaService.deleteSkills(skill)
    .subscribe((skillsList)=>{
      this.LoadSkills();
  })
  }

  AddSkills (skill:Skills){
  this.personaService.AddSkills(skill).subscribe((skillsList)=>{
    this.LoadSkills();
})
}

  EditarSkills (skill:Skills){
    this.personaService.UpdateSkills(skill).subscribe((skillsList)=>{
      this.LoadSkills();
  })
  }
}
