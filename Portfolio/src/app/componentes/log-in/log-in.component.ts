import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/service/log-in.service'


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private logInService: LogInService,
  private rutas:Router) {
      this.form = formBuilder.group(
        {
          nombreUsuario:['', [Validators.required,Validators.minLength(2)]],
          password:['', [Validators.required,Validators.minLength(3)]]
        })
      }
  
  ngOnInit(){}

get nombreUsuario(){
return this.form.get('nombreUsuario');
}

get Password(){
return this.form.get('password');
}

onEnviar(event:Event){
  event.preventDefault;
  this.logInService.IniciarSesion(this.form.value).subscribe(data=>{
    console.log("DATA:" + JSON.stringify(data));
    this.rutas.navigate(['/portfolio']);
  })
}
  
}
