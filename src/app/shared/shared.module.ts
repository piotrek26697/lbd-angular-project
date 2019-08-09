import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatSnackBarModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
