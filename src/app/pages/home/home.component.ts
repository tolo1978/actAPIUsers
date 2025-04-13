import { Component, inject } from '@angular/core';
import { Iuser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-home',
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  arrayUsers:Iuser[] = [];
  UserService = inject(UsersService);


  ngOninit() {

    this.getUsers()

    }
    async getUsers() {
    try {
      let response = await this.UserService.getAll()
      console.log(response);
      } catch (error) {
    }
  }

}
