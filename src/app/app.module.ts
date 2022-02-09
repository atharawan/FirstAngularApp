import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyAppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyAppComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MyAppComponent]
})
export class AppModule {
  title: string ="First Angular"
 }
