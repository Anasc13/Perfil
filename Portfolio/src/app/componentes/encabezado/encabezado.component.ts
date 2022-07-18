import { Component, OnInit } from '@angular/core';
import { LogInService } from 'src/app/service/log-in.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
 
  showLogIn: boolean = false;
  subscription?: Subscription;

  constructor(
    private router: Router, 
    private loginService:LogInService) 
    {     
      this.subscription = this.loginService.onToggleLogIn()
      .subscribe((value) => this.showLogIn = value )}

  ngOnInit(): void {
     }

  hasRoute(router: string){
      return this.router.url === router
    }
  
  OnToggleLogIn (){
    this.loginService.toggleLogIn();
  }   
  
}
