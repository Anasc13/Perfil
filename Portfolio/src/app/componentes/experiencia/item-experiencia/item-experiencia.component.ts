import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Experience } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css']
})
export class ItemExperienciaComponent implements OnInit {
  @Output() OnDeleteExperience: EventEmitter<Experience> = new EventEmitter()
  @Output() onEditExperience: EventEmitter<Experience> =new EventEmitter();
  @Input()  experience: Experience= { position:"", company:"", img:"", mode:"", start:"", end:"", timeElapsed:"" }
  
  
  faTrash = faTrash;
  position: string=this.experience.position;
  company: string=this.experience.company;
  img: string=this.experience.img;
  mode: string=this.experience.mode;
  start:string=this.experience.start;
  end:string=this.experience.end;
  timeElapsed: string=this.experience.timeElapsed;

  subscription?: Subscription;
  showEditExperience: boolean = false;

  constructor (private editService: EditService) {
      this.subscription = this.editService.onToggleEditExperience()
                              .subscribe(value => this.showEditExperience = value )
  }

  ngOnInit(): void {
  }
  
  onDelete(experience: Experience) {
    this.OnDeleteExperience.emit(experience);
  }

  onSubmit(experience: Experience){
    this.onEditExperience.emit(experience);
  }  
  
  onToggleEditExperience(){
    this.editService.toggleEditExperience();
    }
}
