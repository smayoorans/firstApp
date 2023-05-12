import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://api.github.com/users')
    .pipe(map(res => res.map((item: any) => ({ login: item.login, avatarUrl: item.avatar_url }))));
  }
}
