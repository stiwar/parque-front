import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoEdicionComponent } from './pages/vehiculo/vehiculo-edicion/vehiculo-edicion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    VehiculoEdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, //importacion de elementos de UI de Angulrar material
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
