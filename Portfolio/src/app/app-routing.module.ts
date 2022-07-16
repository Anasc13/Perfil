import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LogInComponent } from './componentes/log-in/log-in.component';

const Routes: Routes = [ 
  { path: 'login', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(Routes, {enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
