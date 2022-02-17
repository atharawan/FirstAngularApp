import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { userRout } from "./user.routs";
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  imports :[
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRout)

  ],
  declarations: [
    UserProfileComponent,
    UserSettingsComponent
  ],
  providers: []

})
export class UserModule {

}
