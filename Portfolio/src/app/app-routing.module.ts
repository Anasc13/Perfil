import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonaComponent } from './componentes/edit-persona/edit-persona.component';
import { PersonasComponent } from './componentes/personas/personas.component';


const Routes: Routes = [
  { path: 'editarPersona', component: EditPersonaComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(Routes, {enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
