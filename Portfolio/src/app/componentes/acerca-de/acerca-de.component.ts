import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Acerca } from 'src/models/Interfaces';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit { 

  acercaEdit: Acerca= { about:"" };
  acercalist: Acerca[] = [];


  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getAcerca().subscribe((acerca)=>{
      this.acercalist=acerca;
  });
  }

  EditarAcerca (acerca: Acerca){
    this.personaService.UpdateAcerca(acerca).subscribe(()=>(
      this.acercalist = this.acercalist.filter
      (t => t.id !== acerca.id )
    ))
  }

  AddAcerca (acerca: Acerca){
    this.personaService.AddAcerca(acerca).subscribe((acerca)=>( 
      this.acercalist.push(acerca))
    )}

 
  deleteAcerca(acerca: Acerca){
    this.personaService.deleteAcerca(acerca)
    .subscribe(()=>(
      this.acercalist = this.acercalist.filter
      (t => t.id !== acerca.id )
    ))
  }

}
