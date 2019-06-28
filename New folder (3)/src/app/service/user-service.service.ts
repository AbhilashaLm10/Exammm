import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';
import {HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userList : UserModel[] = [];

  constructor(private http: HttpClientModule) {}

  //add data in database
  insertUser(user: UserModel) {
    this.userList.push(user);
  }

  //return whole database
  getList(): UserModel[] {
    return this.userList;
  }

  //delete a entry
  deleteUser(index: number) {
    return this.userList.splice(index, 1);
  }

  //update data
  /*updateUser(index : number){
   return this.userList.put(index, 1);
  }*/
}
