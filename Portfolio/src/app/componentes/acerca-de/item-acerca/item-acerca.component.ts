import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Acerca } from 'src/models/Interfaces';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-acerca',
  templateUrl: './item-acerca.component.html',
  styleUrls: ['./item-acerca.component.css']
})
export class ItemAcercaComponent implements OnInit {
  @Input()  acerca:Acerca = { about:"" }
  @Output() OnDeleteAcerca: EventEmitter<Acerca> = new EventEmitter()
  @Output() onEditAcerca: EventEmitter<Acerca> =new EventEmitter();

  
  faTrash = faTrash;
  id?:number;
  about=this.acerca.about;
  subscription?: Subscription;
  showEditarAcerca: boolean = false;

  constructor( private editService: EditService) {
      this.subscription = this.editService.onToggleEditAcerca()
                              .subscribe(value => this.showEditarAcerca = value )
     }
  

  ngOnInit(): void {
  }

  onDelete(acerca: Acerca) {
    this.OnDeleteAcerca.emit(acerca);
  }  

  onSubmit(){
    if(this.about.length == 0){
      alert('Agregue descripción!');
      return
    }
    const { about } = this;
    const newAcerca = { about };
    this.onEditAcerca.emit(newAcerca);
  }
  
  
  OnToggleeditAcerca(){
    this.editService.toggleEditAcerca();
    }
}
