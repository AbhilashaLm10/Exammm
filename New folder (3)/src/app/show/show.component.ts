import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
//import { updateClassProp } from '@angular/core/src/render3/styling';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit,ReactiveFormsModule {

  userList : UserModel[] = [];
  
  constructor(private userService : UserServiceService, private router: Router) {  
  }

  ngOnInit() {
    this.userList = this.userService.getList();
  }

  delete(index: number) {
    var ans = confirm("Are You Sure You want To delete?")
    if (ans) {
      this.userService.deleteUser(index); //delete from service
    }
  }
  /*update(index: string){
      var ans = confirm("Are You Sure You want To update?")
      if (ans) {
        this.userService.updateUser(index); //delete from service
      }
  }*/
}
