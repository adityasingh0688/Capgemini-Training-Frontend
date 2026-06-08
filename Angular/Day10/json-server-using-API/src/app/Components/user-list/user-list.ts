import { Component, signal } from '@angular/core';
import { UserService } from '../../Service/user-service';
import { users } from '../../Service/user-datatype';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  constructor(private userService: UserService) {}
  userData=signal<users[] | null>(null);
  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.userService.getUsers().subscribe((data) => {
      this.userData.set(data);
    });
  }
  DeleteUser(id:any){
    this.userService.deleteUser(id).subscribe((resp)=>{
      if(resp){
        this.getUser();
      }
    })
  }
}
