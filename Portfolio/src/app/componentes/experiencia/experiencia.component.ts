import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Experience } from 'src/models/Interfaces';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienceList: Experience[] = [];


  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    // Like Promise
    this.personaService.getExperience().subscribe((experienceList)=>{
      this.experienceList = experienceList;
  });
  }

  deleteExperience(experience: Experience){
    this.personaService.deleteExperience(experience)
    .subscribe(()=>(
      this.experienceList = this.experienceList.filter
      (t => t.id !== experience.id )
    ))
  }

  AddExperience (experience: Experience){
  this.personaService.AddExperience(experience).subscribe((experience)=>( 
    this.experienceList.push(experience))
  )}

  EditarEducation (experience:Experience){
    this.personaService.UpdateExperience(experience).subscribe(()=>(
      this.experienceList = this.experienceList.filter
      (t => t.id !== experience.id )
    ))
  }

}
