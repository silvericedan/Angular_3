import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomovilComponent } from './automovil/automovil.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MecanicoComponent } from './mecanico/mecanico.component';
import { TallerComponent } from './taller/taller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AutomovilComponent,
    MecanicoComponent,
    TallerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
