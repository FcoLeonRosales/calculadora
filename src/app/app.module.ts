import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { CalculoComponent } from './calculo/calculo.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadoComponent,
    CalculoComponent
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
