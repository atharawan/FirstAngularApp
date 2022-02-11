import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyAppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

import { FormsModule } from '@angular/forms';
import { MyCurrencyPipe } from './shared/my-currency.pipe';
import { RemoveSpacesPipe } from './shared/remove-spaces.pipe';
import { DatePipe } from '@angular/common';
import { MasterViewComponenet } from './parentviewcomponent/master-view.component';
import { ChildViewComponenet } from './parentviewcomponent/childview/child-view.component';

@NgModule({
  declarations: [
    MyAppComponent,
    ProductListComponent,
    MyCurrencyPipe,
    RemoveSpacesPipe,
    MasterViewComponenet,
    ChildViewComponenet
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [MyAppComponent]
})
export class AppModule {
  title: string ="First Angular"
 }
