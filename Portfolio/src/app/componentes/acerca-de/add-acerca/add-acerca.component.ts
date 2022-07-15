import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { EditService } from 'src/app/service/edit.service';
import { Acerca } from 'src/models/Interfaces';

@Component({
  selector: 'app-add-acerca',
  templateUrl: './add-acerca.component.html',
  styleUrls: ['./add-acerca.component.css']
})
export class AddAcercaComponent implements OnInit {
  @Output() onAddAcerca: EventEmitter<Acerca> =new EventEmitter();

  about:  string = '';
  showAddAcerca: boolean = false;
  subscription?: Subscription; 

  constructor(
    private editService: EditService
  ) {
    this.subscription = this.editService.onToggleAcerca()
                              .subscribe(value => this.showAddAcerca = value )
   }

  ngOnInit(): void {
  }

  onSubmit(){
  if(this.about.length == 0){
    alert('Agregue descripción!');
    return
  }
  const { about }= this
  const newAcerca = { about }

  this.onAddAcerca.emit(newAcerca);
}

}
