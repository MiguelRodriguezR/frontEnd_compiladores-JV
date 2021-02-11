import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from "@angular/forms";
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import { JudgeComponent } from './components/judge/judge.component';
import { NavbarComponent } from './components/judge/navbar/navbar.component';
import { IntroduccionComponent } from './components/judge/introduccion/introduccion.component';
import { CategoriasComponent } from './components/judge/categorias/categorias.component';
import { ScoresComponent } from './components/judge/scores/scores.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MainComponent,
    JudgeComponent,
    NavbarComponent,
    IntroduccionComponent,
    CategoriasComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
