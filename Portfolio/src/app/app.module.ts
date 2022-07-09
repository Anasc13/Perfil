import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InfoPersonalComponent } from './componentes/info-personal/info-personal.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { EditPersonaComponent } from './componentes/edit-persona/edit-persona.component';
import { BotonEditComponent } from './componentes/boton-edit/boton-edit.component';
import { PersonaHeaderComponent } from './componentes/persona-header/persona-header.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoPersonalComponent,
    PersonasComponent,
    EditPersonaComponent,
    BotonEditComponent,
    PersonaHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
