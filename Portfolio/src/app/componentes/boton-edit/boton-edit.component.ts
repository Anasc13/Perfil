import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-edit',
  templateUrl: './boton-edit.component.html',
  styleUrls: ['./boton-edit.component.css']
})
export class BotonEditComponent implements OnInit {
  @Input() color: string = "";
  @Input() text: string = "";
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
