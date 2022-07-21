import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditService } from 'src/app/service/edit.service';
import { Experience } from 'src/models/Interfaces';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  @Output() onAddExperience: EventEmitter<Experience> =new EventEmitter();

  id?: number
  position:string= '';
  company:string= '';
  img:string= '';
  mode:string= '';
  start:number= 0;
  end:number= 0;
  timeElapsed:string= '';
  
  showAddExperience: boolean = false;
  subscription?: Subscription;

  constructor(
    private editService: EditService,
  ) {
    this.subscription = this.editService.onToggleAddExperience()
                              .subscribe(value => this.showAddExperience = value )
   }

  ngOnInit(): void {
  }

  onSubmit(){
  if(this.position.length == 0){
    alert('Please add a position!');
    return
  }
  const { position, company, img, mode, start, end,timeElapsed }= this
  const newExperience = { position, company, img, mode, start, end,timeElapsed }

  this.onAddExperience.emit(newExperience);
}

OnToggleAddExperience (){
  this.editService.toggleAddExperience();
}
}
