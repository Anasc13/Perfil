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

  acercas:Acerca[]= [];
  acercalist:Acerca= { about:"" };
  about:string=this.acercalist.about;
  
  educations: Education[]= [];
  educationList: Education= { school:"", title:"", img:"", career:"", score:"", start:"", end:""}
  school=this.educationList.school;
  title=this.educationList.title;
  img=this.educationList.img;
  career=this.educationList.career;
  score=this.educationList.score;
  start=this.educationList.start;
  end=this.educationList.end;

  experiences: Experience[]= [];
  experienceList: Experience= { position:"", company:"", img:"", mode:"", start:"", end:"", timeElapsed:"" }
  position: string=this.experienceList.position;
  company: string=this.experienceList.company;
  expimg: string=this.experienceList.img;
  mode: string=this.experienceList.mode;
  expstart:string=this.experienceList.start;
  expend:string=this.experienceList.end;
  timeElapsed: string=this.experienceList.timeElapsed;

  personas: Persona[]= [];
  personaList: Persona= { nombre:"", apellido:"", mail:"", position:"", ubication:"", companyName:"", companyImg:"", companyUrl:"" }
  nombre=this.personaList.nombre;
  apellido=this.personaList.apellido;
  mail=this.personaList.mail;
  perposition=this.personaList.position;
  ubication=this.personaList.ubication;
  companyName=this.personaList.companyName;
  companyImg=this.personaList.companyImg;
  companyUrl=this.personaList.companyUrl;

  proyectos: Proyectos[]= [];
  proyectosList: Proyectos= { name:"", description:"", img:"", start:"", end:"", link:"" }
  name:string=this.proyectosList.name;
  description:string=this.proyectosList.description;
  proyimg:string=this.proyectosList.img;
  proystart: string=this.proyectosList.start;
  proyend: string=this.proyectosList.end;
  link:string=this.proyectosList.link;

  skills: Skills[]= [];
  skillsList: Skills= { name:"", percentage: ""}
  skname: string=this.skillsList.name;
  percentage: string=this.skillsList.percentage;
       
constructor(
  private logInService: LogInService,
  private ruta:Router, private personaService:PersonaService) 
  { }

  ngOnInit(): void {
    this.personaService.getAcerca().subscribe((acerca)=>{
      this.acercas=acerca;
    });
    this.personaService.getEducation().subscribe((education)=>{
      this.educations = education;
    });
    this.personaService.getExperience().subscribe((experience)=>{
      this.experiences = experience;
    });
    this.personaService.getAllPersonas().subscribe((persona)=>{
    this.personas=persona
    });
    this.personaService.getProyectos().subscribe((proyecto)=>{
    this.proyectos = proyecto;
    });
    this.personaService.getSkills().subscribe((skills)=>{
    this.skills = skills;
    });
  } 


  LogIn(event:Event){
event.preventDefault;
this.logInService.IniciarSesion(Credential);
this.ruta.navigate(['/login']) 
}

}   
