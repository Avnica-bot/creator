import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';

@NgModule({
  declarations: [
    BookingComponent,
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule
  ]
})
export class BookingModule { }
