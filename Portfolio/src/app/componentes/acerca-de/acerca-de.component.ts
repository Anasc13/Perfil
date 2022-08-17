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
    this.personaService.getAcerca().subscribe((acercalist)=>{
      this.acercalist=acercalist;
  });
  }

  LoadAcerca(): void {
    this.personaService.getAcerca().subscribe(acercalist => {this.acercalist = acercalist;})
  }

  EditarAcerca (acerca: Acerca){
    this.personaService.UpdateAcerca(acerca).subscribe((acercalist)=>{
      this.LoadAcerca();      
  })
  }

  AddAcerca (acerca: Acerca){
    this.personaService.AddAcerca(acerca).subscribe((acercalist)=>{
      this.LoadAcerca();
  })
}

  deleteAcerca(acerca: Acerca){
    this.personaService.deleteAcerca(acerca)
    .subscribe((acercalist)=>{
      this.LoadAcerca();
  })}

}
