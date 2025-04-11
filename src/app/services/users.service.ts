import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endPoint: string = 'https://peticiones.online/api/users';
  private httpClient = inject(HttpClient);

  constructor() { }
}
