import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";


export const userRout = [
  {path: 'profile', component: UserProfileComponent},
  {path: 'settings', component: UserSettingsComponent}
];
