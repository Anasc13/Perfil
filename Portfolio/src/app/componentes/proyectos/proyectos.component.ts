import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Proyectos } from 'src/models/Interfaces';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList: Proyectos[] = [];

 constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    // Like Promise
    this.personaService.getProyectos().subscribe((ProyectosList)=>{
      this.proyectosList = ProyectosList;
  });
  }

  deleteProyectos(proyecto: Proyectos){
    this.personaService.deleteProyectos(proyecto)
    .subscribe(()=>(
      this.proyectosList = this.proyectosList.filter
      (t => t.id !== proyecto.id )
    ))
  }

  AddProyectos (proyecto:Proyectos){
  this.personaService. AddProyectos(proyecto).subscribe((proyecto)=>( 
    this.proyectosList.push(proyecto))
  )}

  EditarProyectos (proyecto:Proyectos){
    this.personaService.UpdateProyectos(proyecto).subscribe(()=>(
      this.proyectosList = this.proyectosList.filter
      (t => t.id !== proyecto.id )
    ))
  }
}
