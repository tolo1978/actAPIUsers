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


    // async chargeData(page: number = 1) {
    //   try {
    //     let response = await this.usersService.getAll(page)
    //     console.log(response);
    //     this.totalPage = response.total_pages;
    //     this.currentPage = response.page;
    //     this.arrUsers = response.results;
    //   } catch (error) {
    //     console.log(error)
    //   }
    }
    async getUsers() {
    try {
      let response = await this.UserService.getAll()
      console.log(response.results);
      } catch (error) {
    }
  }

}
