import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Acerca } from 'src/models/Interfaces';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acercaList: Acerca[] = [];
  faEdit = faEdit;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getAcerca().subscribe(data=>{
      this.acercaList=(data);
  });
  }
}
