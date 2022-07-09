import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/service/edit.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persona-header',
  templateUrl: './persona-header.component.html',
  styleUrls: ['./persona-header.component.css']
})
export class PersonaHeaderComponent implements OnInit {
  
  showAddPersona: boolean = true;
  subscription?: Subscription;

  constructor(private editService:EditService) 
  {
    this.subscription = this.editService.onToggle()
      .subscribe(value => this.showAddPersona = value)
   }

  ngOnInit(): void {
  }

  toggleAddPersona (){
    this.editService.toggleAddPersona();
  }
 
}
