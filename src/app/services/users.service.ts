import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endPoint: string = 'https://peticiones.online/api/users';
  private httpClient = inject(HttpClient);

    getAll(page: number):Promise<any> {
      return lastValueFrom(this.httpClient.get<any>(`${this.endPoint}/?page=${page}`));
  }
   getbyID(_id: string):Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.endPoint}/${_id}`));
  }
   delete(_id: string):Promise<any> {
    return lastValueFrom(this.httpClient.delete<any>(`${this.endPoint}/${_id}`));
  }
   insert(user: string):Promise<any> {
    return lastValueFrom(this.httpClient.post<any>(this.endPoint, user));
  }
}
