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
  currentPage: number = 1;
  totalPages: number = 0


  ngOnInit() {
    this.getUsers();
    }
    
    async getUsers(page: number = 1) {
      try {
        let response = await this.UserService.getAll(page)
        console.log(response);
        this.totalPages = response.total_pages;
        this.currentPage = response.page;
        console.log(`este es el número de página actual ${this.currentPage}`)
        this.arrayUsers = response.results;
      } catch (error) {
      }
    }


    //   gotoPage() {
    //     if (this.currentPage < this.totalPages) {
    //       this.getUsers(2)
    //       return false
    //     }
    //     this.getUsers(this.currentPage + 1)
    //     return false;
    //   }
    // }
    
        
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        console.log(this.currentPage);
        this.getUsers(this.currentPage);
      }
    }
    
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.getUsers(this.currentPage);

      }

    }   
  }