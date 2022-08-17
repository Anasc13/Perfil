import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.css']
})
export class ButtonEditComponent implements OnInit {
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
