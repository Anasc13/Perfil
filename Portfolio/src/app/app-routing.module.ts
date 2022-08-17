import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { HomeComponent } from './componentes/home/home.component';


const appRoutes: Routes = [ 
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LogInComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'home', pathMatch:'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 