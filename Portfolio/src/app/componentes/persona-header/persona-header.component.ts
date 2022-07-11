import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/service/edit.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-persona-header',
  templateUrl: './persona-header.component.html',
  styleUrls: ['./persona-header.component.css']
})
export class PersonaHeaderComponent implements OnInit {
  
  showAddPersona: boolean = false;
  subscription?: Subscription;
  faEdit = faEdit;
  faMinus = faMinus;

   constructor(
    private editService:EditService,
    private router: Router) 
  {
    this.subscription = this.editService.onToggle()
      .subscribe(value => this.showAddPersona = value)
   }

  ngOnInit(): void {
  }

  toggleAddPersona (){
    this.editService.toggleAddPersona();
    console.log(this.showAddPersona);
  }

  
  hasRoute(router: string){
    return this.router.url === router
  }
}
