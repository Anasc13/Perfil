import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Education } from 'src/models/Interfaces';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educationList: Education[] = [];

 constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    // Like Promise
    this.personaService.getEducation().subscribe((educationList)=>{
      this.educationList = educationList;
  });
  }

  deleteEducation(education:Education){
    this.personaService.deleteEducation(education)
    .subscribe(()=>(
      this.educationList = this.educationList.filter
      (t => t.id !== education.id )
    ))
  }

  AddEducation (education:Education){
  this.personaService.AddEducation(education).subscribe((education)=>( 
    this.educationList.push(education))
  )}

  EditarEducation (education:Education){
    this.personaService.UpdateEducation(education).subscribe(()=>(
      this.educationList = this.educationList.filter
      (t => t.id !== education.id )
    ))
  }
    
}