import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ValidateInputComponent } from './validate-input/validate-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidateInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }