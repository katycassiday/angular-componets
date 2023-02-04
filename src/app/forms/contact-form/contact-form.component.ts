import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  form = this.fb.group({
    name:['', {
      validators:[Validators.required],
     
    }],
    email:['', {
      validators: [Validators.required, Validators.email],
      updateOn:'blur'
    }],
    reason:['', [
      Validators.required
    ]
    ],
    description:['', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(300)
    ]]
  })

  constructor (private fb: FormBuilder) {

  }
}