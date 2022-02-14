import { Component } from "@angular/core";
import { IProduct } from "../products/product";

@Component(
  {
    selector : 'master-view',
    templateUrl: './master-view.component.html'
  }
)
export class MasterViewComponenet{

  outPutString : string = 'This is output string form Master';
  outPutProduct : IProduct[] = [];
  onNotifiedStringClicked(input: string)
  {
      this.outPutString = input;
  }



  onNotifiedProductArray(input: IProduct[])
  {
      this.outPutProduct = input;
  }


}
