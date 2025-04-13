import { Component, inject } from '@angular/core';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { Iuser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-view',
  imports: [ButtonsComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {


}
