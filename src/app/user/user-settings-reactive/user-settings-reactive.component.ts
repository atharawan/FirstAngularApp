import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

function ratingControl(c : AbstractControl) : { [key: string] : boolean } | null
{
    if(c.value != null && (isNaN(c.value) || c.value < 1 || c.value > 5))
    {
      return {'range': true};
    }
    else
    return null
}

function ratingRange(min: number, max: number) :  ValidatorFn {

 return (c : AbstractControl) : { [key: string] : boolean } | null =>
{
    if(c.value != null && (isNaN(c.value) || c.value < min || c.value > max))
    {
      return {'range': true};
    }
    else
    return null
  }
}


@Component({
  selector: 'app-user-settings-reactive',
  templateUrl: './user-settings-reactive.component.html',
  styleUrls: ['./user-settings-reactive.component.css']
})
export class UserSettingsReactiveComponent implements OnInit {

  userForm! : FormGroup;


  constructor(private fb:  FormBuilder) { }

  ngOnInit(): void {


    this.userForm = this.fb.group({

    phone: [null, [ratingRange(1, 10), Validators.required]],
    emailGroup: this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      confirmEmail : ['',[Validators.required]],
    }),
    sepcialOffer: [true],
    subscriptionPlan : [],
    layoutTheme : [],
    notification : [],
    notes: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(3)]],

    });
    // this.userForm = new FormGroup({
    // email:  new FormControl(),
    // phone: new FormControl(),
    // sepcialOffer: new FormControl(true),
    // subscriptionPlan : new FormControl(),
    // layoutTheme : new FormControl(),
    // notes: new FormControl()

    // });
  }
  sendNotfication(value: string)
  {
    const phoneControl = this.userForm.get('phone');
    const emailControl = this.userForm.get('email');
    if(value == 'phone')
    {
      phoneControl?.setValidators(Validators.required);
      emailControl?.clearValidators();
    }
    else
    {
      phoneControl?.clearValidators()
      emailControl?.setValidators(Validators.required);
    }

    phoneControl?.updateValueAndValidity();
    emailControl?.updateValueAndValidity();

  }


  loadData()
  {
      this.userForm.setValue(
        {
            email:  'athar@gmail.com',
            phone: '033131',
            sepcialOffer: true,
            subscriptionPlan : "2",
            layoutTheme : 'light',
            notes: 'Test',
            notification: 'email',
            confirmEmail : '',
        }
      )
  }

  loadPartialData()
  {
      this.userForm.patchValue(
        {
            email:  'athar@gmail.com',
            sepcialOffer: true,
            subscriptionPlan : "2",
            notes: 'Test'
        }
      )
  }


  onSubmit()
  {
    console.log(this.userForm.value);
  }


}
