import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonaComponent } from './componentes/edit-persona/edit-persona.component';

const routes: Routes = [
  
  { path: 'editarPersona', component: EditPersonaComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
