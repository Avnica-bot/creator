import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'creator-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  get guests() { return this.bookingForm.get('guests') as FormArray };

  constructor(private config: ConfigService, private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const roomId = this.activatedRoute.snapshot.paramMap.get('roomId')
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: roomId, disabled: true }, { validators: [Validators.required,] }),
      guestEmail: ['', [Validators.required, Validators.email, Validators.minLength(5), CustomValidator.ValidateSpecialChar("*"), CustomValidator.ValidateName]],
      checkinDate: new FormControl('', { validators: [] }),
      checkoutDate: new FormControl('', { validators: [] }),
      address: this.fb.group({
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        zipCode: new FormControl(''),
      }),
      guests: this.fb.array([]),
      tnc: [false, Validators.requiredTrue]
    }, { updateOn: 'blur', validators: [ CustomValidator.ValidateDate ] });
  }

  addGuest() {
    this.guests.push(this.fb.group({ guestName: [''], age: new FormControl("") }));
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }

}
