import { Component, inject, Input } from '@angular/core';
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
  @Input() id: string | undefined = "";
  user: Iuser | undefined;
  userService = inject(UsersService)

  async ngOnInit() {
    let id = String(this.id)
    
    try {
      this.user = await this.userService.getbyID(id)
      console.log(this.user)

    } catch (error) {
      console.log(error)
    }
  }

}
