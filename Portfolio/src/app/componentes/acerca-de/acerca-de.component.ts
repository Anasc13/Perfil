import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';
import { Acerca } from 'src/models/Interfaces';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  acercaList: Acerca[] = [];
  showAddAcerca: boolean = false;
  subscription?: Subscription;

  constructor(private personaService:PersonaService,private editService: EditService) 
  { 
    this.subscription = this.editService.onToggleAcerca()
                              .subscribe((value) => this.showAddAcerca = value)
  }

  ngOnInit(): void {
    this.personaService.getAcerca().subscribe((acerca)=>{
      this.acercaList=acerca;
  });
  }

  AddAcerca (acerca: Acerca){
    this.personaService.AddAcerca(acerca).subscribe((acerca)=>( 
      this.acercaList.push(acerca))
    )
  }

  OnToggleAddAcerca (){
    this.editService.toggleAddAcerca();
  }
}
