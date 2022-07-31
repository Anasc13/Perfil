import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { EditPersonaComponent } from './componentes/personas/edit-persona/edit-persona.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ButtonComponent } from './componentes/button/button.component';
import { ItemEducacionComponent } from './componentes/educacion/item-educacion/item-educacion.component';
import { AddEducationComponent } from './componentes/educacion/add-education/add-education.component';
import { AddAcercaComponent } from './componentes/acerca-de/add-acerca/add-acerca.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { AddExperienciaComponent } from './componentes/experiencia/add-experiencia/add-experiencia.component';
import { ItemExperienciaComponent } from './componentes/experiencia/item-experiencia/item-experiencia.component';
import { AddProyectoComponent } from './componentes/proyectos/add-proyecto/add-proyecto.component';
import { ItemProyectoComponent } from './componentes/proyectos/item-proyecto/item-proyecto.component';
import { AddSkillComponent } from './componentes/skills/add-skill/add-skill.component';
import { ItemSkillComponent } from './componentes/skills/item-skill/item-skill.component';
import { ItemPersonaComponent } from './componentes/personas/item-persona/item-persona.component';
import { ItemAcercaComponent } from './componentes/acerca-de/item-acerca/item-acerca.component';
import { ButtonEditComponent } from './componentes/button-edit/button-edit.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { PersonaService } from './service/persona.service';
import { InterceptorService } from './service/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    EditPersonaComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    ButtonComponent,
    ItemEducacionComponent,
    AddEducationComponent,
    AddAcercaComponent,
    LogInComponent,
    AddExperienciaComponent,
    ItemExperienciaComponent,
    AddProyectoComponent,
    ItemProyectoComponent,
    AddSkillComponent,
    ItemSkillComponent,
    ItemPersonaComponent,
    ItemAcercaComponent,
    ButtonEditComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [PersonaService, 
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
