import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from "./user";
import { Observable, tap, map, catchError, throwError } from "rxjs";


@Injectable({
  providedIn : 'root'
})
export class UserService{

  private rootUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient)
  {

  }


  getUsers() : Observable<IUser[]> {

    return this.httpClient.get<IUser[]>(this.rootUrl).pipe(
      // map(users => users.map(user => ({
      //     id : user.id *2,
      //     name: 'Athar'
      // }) as IUser)),

      map(users => users.map( user => ({
        ...user,
        id : user.id * 3,
        name: user.name + "(My Name)"

      }))),
      tap(x => console.log('All', JSON.stringify(x))),
      catchError(this.handleHerror)
    )
  }
  handleHerror(err: HttpErrorResponse){
    let errorMessage  = '';
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = `Error occured:  ${err.error.message}`;
    }
    else
    {
    errorMessage = `Error Status code ${err.status}, Message ${err.message}`;
    }
   console.log(errorMessage);
   return throwError(errorMessage);
  }

}
