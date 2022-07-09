import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/models/Persona'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = []

  constructor() { }

  ngOnInit(): void {
    let persona1 = new Persona (
      "assets/Images/bosques2.png",
      "assets/Images/Perfil_circle.JPG",
      "Ana", 
      "Santa Cruz",
      "anasantacruz13@gmail.com",
      "Analista de datos",
      "Salta (Argentina)",
      "OVcM",
      "assets/Images/Logo_ovcm.png",
      "http://ovcmsalta.gob.ar/")
    this.personas.push(persona1)
  }

}
