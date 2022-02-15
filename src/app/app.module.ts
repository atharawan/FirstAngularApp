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
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail/product-detail.component';
import { ProductGuard } from './products/product.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyAppComponent,
    ProductListComponent,
    MyCurrencyPipe,
    RemoveSpacesPipe,
    MasterViewComponenet,
    ChildViewComponenet,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'products', component: ProductListComponent},
      {path : 'products/:id', component: ProductDetailComponent, canActivate : [ProductGuard]},
      {path: 'component', component: MasterViewComponenet},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'user', loadChildren : () => import('./user/user.module')
      .then(x=>x.UserModule) },
      {path: '', redirectTo: 'welcome', pathMatch : 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch : 'full'}
    ])
  ],
  providers: [DatePipe],
  bootstrap: [MyAppComponent]
})
export class AppModule {
  title: string ="First Angular"
 }
