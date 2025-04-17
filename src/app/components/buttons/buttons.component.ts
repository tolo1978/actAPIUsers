import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input() id: string | undefined = "";
  @Input() return: boolean = false;
  UserService = inject(UsersService);
  
  


}
