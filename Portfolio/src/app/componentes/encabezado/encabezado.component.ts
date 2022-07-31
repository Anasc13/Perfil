import { Component, OnInit } from '@angular/core';
import { LogInService } from 'src/app/service/log-in.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(
    private logInService: LogInService,
    private ruta:Router ) 
    { }

  ngOnInit(): void {
     }

logout(event:Event){
  event.preventDefault;
  this.logInService.CerrarSesion();
  this.ruta.navigate(['/login']) }

}   



