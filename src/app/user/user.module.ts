import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { userRout } from "./user.routs";



@NgModule({
  imports :[
    CommonModule,
    RouterModule.forChild(userRout)

  ],
  declarations: [
    UserProfileComponent
  ],
  providers: []

})
export class UserModule {

}
