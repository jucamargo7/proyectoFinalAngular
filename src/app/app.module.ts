import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { PersonaService } from './features/persona.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EstudiantesModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
