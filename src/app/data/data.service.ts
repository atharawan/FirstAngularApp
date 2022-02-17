import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IuserSettings } from "../user/user-settings";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataSerice{

  constructor(private client : HttpClient)
  {

  }


  postUsersData(data: IuserSettings) : Observable<IuserSettings>
  {
    return this.client.post<IuserSettings>("https://putsreq.com/QhDgseJHvNejMWSxL96B", data);
  }
}
