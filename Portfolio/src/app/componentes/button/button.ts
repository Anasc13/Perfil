import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boton-edit',
  templateUrl: './boton-edit.component.html',
  styleUrls: ['./boton-edit.component.css']
})
export class BotonEditComponent implements OnInit {
  @Output() btnClick = new EventEmitter()
  @Input() color: string = "";
  
  faEdit = faEdit;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }
}