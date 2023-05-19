import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { PersonaService } from './features/persona.service';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CursosModule } from './cursos/cursos.module';

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
    CoreModule,
    CursosModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })

  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
