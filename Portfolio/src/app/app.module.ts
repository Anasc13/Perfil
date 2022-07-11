import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { EditPersonaComponent } from './componentes/edit-persona/edit-persona.component';
import { BotonEditComponent } from './componentes/boton-edit/boton-edit.component';
import { PersonaHeaderComponent } from './componentes/persona-header/persona-header.component';
import { ItemPersonaComponent } from './componentes/item-persona/item-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    EditPersonaComponent,
    BotonEditComponent,
    PersonaHeaderComponent,
    ItemPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
