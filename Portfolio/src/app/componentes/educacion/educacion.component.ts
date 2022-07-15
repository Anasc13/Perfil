import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';
import { Education } from 'src/models/Interfaces';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  @Output() OnDeleteEducation: EventEmitter<Education> = new EventEmitter()
  
  educationList: Education[] = [];
  faTimes = faTimes;
  showAddEducation: boolean = false;
  subscription?: Subscription;

  constructor(private personaService:PersonaService,
    private editService: EditService) 
  { 
    this.subscription = this.editService.onToggleEducation()
                              .subscribe((value) => this.showAddEducation = value)
  }
  ngOnInit(): void {
    this.personaService.getEducation().subscribe((educations)=>{
      this.educationList = educations;
  });
  }

  deleteEducation(education:Education){
    this.personaService.deleteEducation(education)
    .subscribe(()=>(
      this.educationList = this.educationList.filter(t => t.id !== education.id )
    ))
  }

  AddEducation (education:Education){
  this.personaService.AddEducation(education).subscribe((education)=>( 
    this.educationList.push(education))
  )}
  
  OnToggleAddEducation (){
  this.editService.toggleAddEducation();}
  
  onDelete(education: Education) {
  this.OnDeleteEducation.emit(education);}
}
