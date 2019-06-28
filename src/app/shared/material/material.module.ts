import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule

  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
})
export class MaterialModule { }
