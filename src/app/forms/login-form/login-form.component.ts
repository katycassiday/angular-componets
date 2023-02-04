
import { Component, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength-validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {


  form = this.fb.group({
    email: ['', {
      validators: [Validators.required, Validators.email],
      updateOn:'blur',
    }],

      password:['', [
      Validators.required, 
      Validators.minLength(8), 
      Validators.maxLength(15),
      createPasswordStrengthValidator()
    ]]

  })
  

  constructor(private fb: FormBuilder){

  }
}