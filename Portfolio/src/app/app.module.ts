import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoPersonalComponent } from './componentes/info-personal/info-personal.component';
import { PersonasComponent } from './componentes/personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPersonalComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
