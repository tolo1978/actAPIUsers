import { Component, inject, Input } from '@angular/core';
import {FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { toast } from 'ngx-sonner';
import { Iuser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Input() id: string = '';
  userService = inject(UsersService);
  user!: Iuser;
  title: string = 'Crear usuario'


  async ngOnInit() {
    let id = String(this.id)

   if(this.id) {
      try {
        this.user = await this.userService.getbyID(id)
        this.title = 'Actualizar usuario'; 
      } catch (error: any) {
        toast.error(error.error)
      }
   }
   this.userForm = new FormGroup({
      id: new FormControl(this.user?.id, []),
      first_name: new FormControl(this.user?.first_name, []),
      last_name: new FormControl(this.user?.last_name, []),
      username: new FormControl(this.user?.username, []),
      email: new FormControl(this.user?.email, []),
      image: new FormControl(this.user?.image, []),
      password: new FormControl(this.user?.password, []),

   })
  }

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
     
      checkControl(controlName: string, errorName: string): boolean | undefined {
        return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
      }
  

      async getDataForm() {
        let response: Iuser | any;
        
        try {
          if (this.userForm.value.id) {
            // Actualizar
            response = await this.userService.update(this.userForm.value.id, this.userForm.value);
            toast.success('Usuario actualizado correctamente');
          } else {
            // Insertar
            response = await this.userService.insert(this.userForm.value);
            toast.success('Usuario insertado correctamente');
          }
      
          console.log(response);
          
          if (response.id) {
            this.userForm.reset();
          }
      
        } catch (error: any) {
          console.error(error);
          toast.error('Error al guardar el usuario');
        }
      }



  }





