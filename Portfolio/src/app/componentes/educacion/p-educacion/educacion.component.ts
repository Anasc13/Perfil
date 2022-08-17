import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Education } from 'src/models/Interfaces';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion/p-educacion/educacion.component.html',
  styleUrls: ['./educacion/p-educacion/educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educationList: Education[] = [];

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getEducation().subscribe(data=>{
      this.educationList=(data);
  });
  }
  deleteEducation(educacion:Education){
    this.personaService.deleteEducation(educacion)
    .subscribe(()=>(
      this.educationList = this.educationList.filter( t => t.id !== educacion.id )
    ))
  }

  AddEducation (educacion:Education){
  this.personaService.AddEducation(educacion).subscribe((educacion)=>( 
    this.educationList.push(educacion))
  )
}
}
