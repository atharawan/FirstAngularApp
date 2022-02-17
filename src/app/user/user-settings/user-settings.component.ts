import { Component, OnInit } from '@angular/core';

import { NgForm, NgModel } from '@angular/forms';
import { DataSerice } from 'src/app/data/data.service';
import { IuserSettings } from '../user-settings';
@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  constructor(private dataService : DataSerice) { }


  orgUserSettingsForm : IuserSettings ={
    email:  '',
    phone: '3434',
    sepcialOffer: true,
    subscriptionPlan : 2,
    layoutTheme : "dark",
    notes: ''
  }

  userSettingsForm : IuserSettings = {...this.orgUserSettingsForm};

  ngOnInit(): void {
    // this.userSettingsForm  ={
    //   email:  'athar@hotmai.com',
    //   phone: '3434',
    //   sepcialOffer: true,
    //   subscriptionPlan : 2,
    //   layoutTheme : "dark",
    //   notes: ''
    // }

  }


  OnSubmit(f: NgForm)
  {
    console.log(f.submitted);
    if(f.submitted && f.valid)
    {
      this.dataService.postUsersData(this.userSettingsForm).subscribe({

        next: (u) => console.log("Success", u),
        error: (e) => console.log("Erro", e)
      });

    }
    console.log(JSON.stringify(this.userSettingsForm));
  }




  secondSubmit(form2: NgForm)
  {
    console.log(form2.submitted);

    console.log(form2.value);
  }

  submitEmail(email: string)
  {
    console.log(email);

  }
}
