import { Component, OnInit, Input } from '@angular/core';
import { LogInService } from 'src/app/service/log-in.service'
import { PersonaService } from 'src/app/service/persona.service';
import { Persona, Acerca, Education, Experience, Proyectos, Skills } from 'src/models/Interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  acercalist: Acerca[] = [];
 
  educationList: Education[] = [];
 
  experienceList: Experience[] = [];

  personaList: Persona[] = [];
  
  proyectosList: Proyectos[] = [];
  
  skillsList: Skills[] = [];

     
constructor(
  private logInService: LogInService,
  private ruta:Router, private personaService:PersonaService) 
  { }

  ngOnInit(): void {
    this.personaService.getAcerca().subscribe((acerca)=>{
      this.acercalist=acerca;
    });
    this.personaService.getEducation().subscribe((education)=>{
      this.educationList = education;
    });
    this.personaService.getExperience().subscribe((experience)=>{
      this.experienceList = experience;
    });
    this.personaService.getAllPersonas().subscribe((persona)=>{
    this.personaList=persona
    });
    this.personaService.getProyectos().subscribe((Proyectos)=>{
    this.proyectosList = Proyectos;
    });
    this.personaService.getSkills().subscribe((skills)=>{
    this.skillsList = skills;
    });
  } 

  LogIn(event:Event){
event.preventDefault;
this.logInService.IniciarSesion(Credential);
this.ruta.navigate(['/login']) 
}

}   
