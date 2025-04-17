import { Component } from '@angular/core';
import {AbstractControl, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userForm: FormGroup = new FormGroup ({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+\@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    ]),
    image: new FormControl('',
      [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16)
      ]),
      repitepassword: new FormControl("", []),
      }, [])
  

    getDataForm() {
      console.log(this.userForm.value)
      this.userForm.reset()
    }

    checkControl(controlName: string, errorName: string): boolean | undefined {
      return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
    }

  }


