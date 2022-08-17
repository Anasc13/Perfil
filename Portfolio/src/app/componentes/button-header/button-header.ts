import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/service/edit.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  showAdd: boolean = false;
  subscription?: Subscription;

  constructor(
    private editService: EditService,
    private router: Router
  ) { 
    this.subscription = this.editService.onToggle()
                              .subscribe((value) => this.showAdd = value )
  }

  ngOnInit(): void {
  }

  OnToggleAdd (){
    this.editService.toggleAdd();
  }

  hasRoute(router: string){
    return this.router.url === router
  }
}