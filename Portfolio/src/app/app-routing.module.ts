import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './componentes/log-in/log-in.component';

const appRoutes: Routes = [ 
  { path: 'login', component: LogInComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
