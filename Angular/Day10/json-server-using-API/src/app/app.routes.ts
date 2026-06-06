import { Routes } from '@angular/router';
import { UserList } from './Components/user-list/user-list';
import { AddUser } from './Components/add-user/add-user';

export const routes: Routes = [
    {
        path:"",
        component: UserList
    },
    {
        path:"add",
        component:AddUser
    }
];
