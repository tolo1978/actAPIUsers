import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Iuser } from '../interfaces/iuser.interface';
import { Iresponse } from '../interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private endPoint: string = 'https://peticiones.online/api/users';
  private httpClient = inject(HttpClient);

    getAll(page: number):Promise<Iresponse> {
      return lastValueFrom(this.httpClient.get<Iresponse>(`${this.endPoint}/?page=${page}`));
  }
   getbyID(_id: string):Promise<Iuser> {
    return lastValueFrom(this.httpClient.get<Iuser>(`${this.endPoint}/${_id}`));
  }
   delete(_id: string):Promise<Iuser> {
    return lastValueFrom(this.httpClient.delete<Iuser>(`${this.endPoint}/${_id}`));
  }
   insert(user: Iuser):Promise<Iuser> {
    return lastValueFrom(this.httpClient.post<Iuser>(this.endPoint, user));
  }
  update(_id: string, user: Iuser): Promise<Iuser> {
    return lastValueFrom(this.httpClient.put<Iuser>(`${this.endPoint}/${_id}`, user));
  } 
}
