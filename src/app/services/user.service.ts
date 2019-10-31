import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {User, Corse, Quizs} from '../models'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    debugger;
      return this.http.post(`http://localhost:4000/users/register`, user);
  }
  getAllstds(){
    return this.http.get<User[]>('http://localhost:4000/users/std');
  }

  getAllmodrs(){
    return this.http.get<User[]>('http://localhost:4000/users/moder');
  }

  getAllAdmins(){
    return this.http.get<User[]>('http://localhost:4000/users/admins');
  }

  getAllcorses(){
    return this.http.get<Corse[]>('http://localhost:4000/users/corses');
  }

  getAllQuizs(){
    return this.http.get<Quizs[]>('http://localhost:4000/users/quizes');
  }

  










}
