import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/models/Persona'

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {
  @Input() persona: Persona = new Persona()
  constructor() { }

  ngOnInit(): void {
  }

}
