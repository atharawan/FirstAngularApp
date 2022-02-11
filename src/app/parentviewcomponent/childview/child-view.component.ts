import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector : 'child-view',
  templateUrl: './child-view.component.html'
})
export class ChildViewComponenet
{
  @Input() childInputString : string = '';
  @Output() notify : EventEmitter<string> = new EventEmitter<string>();


  onClick()
  {
    console.log("child button clicked");
    this.notify.emit("Message from Child component to Parent");

  }
}
