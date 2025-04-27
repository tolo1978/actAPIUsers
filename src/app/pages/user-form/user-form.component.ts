import { Component, inject } from '@angular/core';
import {FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userrService = inject(UsersService);

  userForm: FormGroup = new FormGroup ({
    id: new FormControl(null, []),
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
      Validators.minLength(6)
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
      }, [])
  

    async getDataForm() {
      let response = await this.userrService.insert(this.userForm.value)
      console.log(response)
      if (response.id) {
        toast.success('Usuario insertado correctamente')
        this.userForm.reset()

      }
    }

    checkControl(controlName: string, errorName: string): boolean | undefined {
      return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
    }

  }


