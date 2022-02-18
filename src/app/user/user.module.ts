import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { userRout } from "./user.routs";
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserSettingsReactiveComponent } from './user-settings-reactive/user-settings-reactive.component';



@NgModule({
  imports :[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRout)

  ],
  declarations: [
    UserProfileComponent,
    UserSettingsComponent,
    UserSettingsReactiveComponent
  ],
  providers: []

})
export class UserModule {

}
