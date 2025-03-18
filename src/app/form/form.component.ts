import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  profileData

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initform();
  }

  updateinput() {
    this.profileData.patchValue({ // Use patchValue() for partial updates
      name: 'test',
      email:'',
      salary: '200',
      address: {
        city: 'alex',
        street: 'test'
      }
    });
  }

  submitform() {
    if (this.profileData.valid) {
      console.log(this.profileData.value);
    }
  }

  initform() {
    this.profileData = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', [Validators.required, Validators.maxLength(10)]],
      address: this.fb.group({
        city: '',
        street: ''
      })
    });
  }

  get f() {
    return this.profileData.controls; // Fixed variable name
  }
}