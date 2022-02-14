import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { userRout } from "./user.routs";



@NgModule({
  imports :[
    CommonModule,
    RouterModule.forChild(userRout)

  ],
  declarations: [],
  providers: []

})
export class UserModule {

}
