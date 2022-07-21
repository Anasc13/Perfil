import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditService } from 'src/app/service/edit.service';
import { Education } from 'src/models/Interfaces';


@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  @Output() onAddEducation: EventEmitter<Education> =new EventEmitter();

  id?: number
  school:string= '';
  title:string= '';
  img:string= '';
  career:string= '';
  score:string= '';
  start:string= '';
  end:string= '';
  showAddEducation: boolean = false;
  subscription?: Subscription;

  constructor(
    private editService: EditService,
  ) {
    this.subscription = this.editService.onToggleAddEducation()
                              .subscribe(value => this.showAddEducation = value )
   }

  ngOnInit(): void {
  }

  onSubmit(){
  if(this.school.length == 0){
    alert('Please add a school!');
    return
  }
  const { school, title, img, career, score, start, end }= this
  const newEducation = { school, title, img, career, score, start, end }

  this.onAddEducation.emit(newEducation);
}

OnToggleAddEducation (){
  this.editService.toggleAddEducation();
}

}
