import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from './user-datatype';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}


  getUsers() {
    return this.http.get<users[]>('http://localhost:3000/users');
  }//here we are taking users[] because we are getting whole object of array 

  saveUser(data: users){
    return this.http.post<users>('http://localhost:3000/users',data)
  }//here only one user object

  deleteUser(id: number){
    return this.http.delete<users>(`http://localhost:3000/users/${id}`);
  }

}
