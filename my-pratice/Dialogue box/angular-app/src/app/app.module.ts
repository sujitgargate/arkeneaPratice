import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button/button-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog/dialog-module';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [AppComponent, ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  entryComponents: [ConfirmationDialogComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
