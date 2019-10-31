import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {User} from '../models'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    debugger;
      return this.http.post(`http://localhost:4000/users/register`, user);
  }










}
