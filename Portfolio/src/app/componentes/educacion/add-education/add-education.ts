import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditService } from 'src/app/service/edit.service';
import { Education } from 'src/models/Interfaces';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddEducation: EventEmitter<Education> =new EventEmitter();

  school:string= '';
  title:string= '';
  img:string= '';
  career:string= '';
  score:string= '';
  start:string= '';
  end:string= '';
  showAdd: boolean = false;
  subscription?: Subscription;

  constructor(
    private editService: EditService
  ) {
    this.subscription = this.editService.onToggle()
                              .subscribe(value => this.showAdd = value )
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
}