import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Education } from 'src/models/Interfaces';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educationList: Education[] = [];
  faEdit = faEdit;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getEducation().subscribe(data=>{
      this.educationList=(data);
  });
  }
}
