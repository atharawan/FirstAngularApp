import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IuserSettings } from "../user/user-settings";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DataSerice{

  baseUrl = environment.apiUrl;

  constructor(private client : HttpClient)
  {

  }

  getAllDepartments()
  {

  }


  postUsersData(data: IuserSettings) : Observable<IuserSettings>
  {
    return this.client.post<IuserSettings>("https://putsreq.com/QhDgseJHvNejMWSxL96B", data);
  }
}
