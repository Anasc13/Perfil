import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditService } from 'src/app/service/edit.service';
import { Acerca } from 'src/models/Interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-acerca',
  templateUrl: './add-acerca.component.html',
  styleUrls: ['./add-acerca.component.css']
})
export class AddAcercaComponent implements OnInit {
  @Output() onAddAcerca: EventEmitter<Acerca> =new EventEmitter();

  id?: number;
  about:string= '';
  showAddAcerca: boolean = false;

  subscription?: Subscription;

  constructor(
    private editService: EditService) {
      this.subscription = this.editService.onToggleAddAcerca()
                              .subscribe(value => this.showAddAcerca = value )
     }
  
  ngOnInit(): void {
  }

  onSubmit(){
  if(this.about.length == 0){
    alert('Agregue descripción!');
    return
  }
  const { about }= this;
  const newAcerca = { about };
  this.onAddAcerca.emit(newAcerca);
}


OnToggleAddAcerca(){
  this.editService.toggleAddAcerca();
  }
}