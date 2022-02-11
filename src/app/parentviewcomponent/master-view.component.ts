import { Component } from "@angular/core";

@Component(
  {
    selector : 'master-view',
    templateUrl: './master-view.component.html'
  }
)
export class MasterViewComponenet{

  outPutString : string = 'This is output string form Master';
  onNotifiedClicked(inputstring: string)
  {
      this.outPutString = inputstring;
  }
}
