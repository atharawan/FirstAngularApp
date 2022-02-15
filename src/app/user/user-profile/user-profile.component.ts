import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService:  UserService) { }

  userList$ : Observable<IUser[]> | undefined;
  // userList: IUser[] | undefined;

  err: string= '';
// sub: Subscription | undefined;

  ngOnInit(): void {

    this.userList$ = this.userService.getUsers();

// this.sub = this.userService.getUsers().subscribe(
//   {
//     next: (u) => this.userList =u,
//     error: (e) => this.err = e,
//     complete: () => console.log("Fetch completed")
//   }
// );

  }

  // ngOnDestroy(): void {
  //   // console.log("ngOnDestroy called")
  //   // this.sub?.unsubscribe()

  // }


}
