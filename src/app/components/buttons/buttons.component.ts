import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { toast } from 'ngx-sonner';


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

   async deleteuser(id: string | undefined) {
    if (id)
      try {
        let response: any = await this.UserService.delete(id);
        toast.error('Se ha borrado el usuario')
        
        // console.log(response)
  
      } catch (error) {
        console.error(error)
    }

  }
  
  


}
