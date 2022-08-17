import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Education } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.css']
})

export class ItemEducacionComponent implements OnInit {
  @Output() OnDeleteEducation: EventEmitter<Education> = new EventEmitter()
  @Output() onEditEducation: EventEmitter<Education> =new EventEmitter();
  @Input()  education: Education= { school:"", title:"", img:"", career:"", score:"", start:"", end:""}

  
  faTrash = faTrash;
  id?:number;
  school=this.education.school;
  title=this.education.title;
  img=this.education.img;
  career=this.education.career;
  score=this.education.score;
  start=this.education.start;
  end=this.education.end;

  subscription?: Subscription;
  showEditEducation: boolean = false;

  constructor (private editService: EditService) {
      this.subscription = this.editService.onToggleEditEducation()
                              .subscribe(value => this.showEditEducation = value )
  }

  ngOnInit(): void {
  }
  
  onDelete(education: Education) {
    this.OnDeleteEducation.emit(education);
  }

  onSubmit(){
    if(this.school.length == 0){
      alert('Agregue institución!');
      return
    }
    const { school, title, img, career, score, start, end } = this;
    const newEducation = { school, title, img, career, score, start, end };
    this.onEditEducation.emit(newEducation);
  }  
  
  onToggleEditEducation(){
    this.editService.toggleEditEducation();
    }

}
