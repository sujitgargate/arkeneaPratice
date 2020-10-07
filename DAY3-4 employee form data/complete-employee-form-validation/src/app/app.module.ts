import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatTableModule,
  MatIconModule,
  MatDividerModule,
} from "@angular/material";

import { MatNativeDateModule } from "@angular/material/core";

import { AppComponent } from "./app.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { HeaderComponent } from "./header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";

import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    NgbModule.forRoot(),

    FormsModule,
    MatDialogModule,
    
  ],
  providers: [
    ConfirmDialogComponent,
    NgbActiveModal,

    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, ConfirmDialogComponent],
})
export class AppModule {}
