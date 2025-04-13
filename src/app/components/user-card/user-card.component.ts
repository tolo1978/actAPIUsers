import { Component, Input } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { Iuser } from '../../interfaces/iuser.interface';

@Component({
  selector: 'app-user-card',
  imports: [ButtonsComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user!: Iuser;

}
