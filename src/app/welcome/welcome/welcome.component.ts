import { Component, OnInit } from '@angular/core';
import { from, of, map, tap} from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    of([1,3,5]).subscribe(console.log);
    from([1,3,5]).subscribe(console.log);

    console.log("------------ Emiited with depricated method")
    of('prouct1', 'product2', 'product3').subscribe(
      p => console.log(`${p} was emitted`),
      err => console.log("error logged"),
      () => console.log("Completed")
    )

    console.log("------------ Emiited with new subscirbe  method")

    of('prouct1', 'product2', 'product3').subscribe({
      next: (p)  => console.log(p),
      error: (err) => console.log(err),
      complete: () => console.log("Completed")
    }
    )

    console.log("------------ Using pipe")
    of(2,4,6).pipe(
      tap(x =>  x * 3),
      tap(x => console.info(x)),
      map(x=> x * 3),
      map(x=> x - 2),
      take(2)

    ).subscribe(console.log)




    console.log("------------ Using Exception")
    of(2,4,6).pipe(
      tap(x => console.log(x)),
      map(x=> x * 3),
      map(x =>
        {
          if( x== 6)
          {
            throw console.error("Bad item found")
          }
          return x;
        })

    ).subscribe(console.log)


    console.log("------------ Using Exception Handling")
    of(2,4,6).pipe(
      tap(x => console.log(x)),
      map(x=> x * 3),
      map(x =>
        {
          if( x== 6)
          {
            throw new Error("Bad item found")
          }
          return x;
        })

    ).subscribe({
      next: (p) => console.log(`emitted item ${p}`),
      error: (err) => console.error(`Error occured ${err}` ),
      complete: () => console.log("Completed")
    }
    )

    console.log("------------ Using pipe End")


    const helloWorld = 'Hello World';

    from(helloWorld).subscribe(console.log);

    const array = [10, 20, 30];
    const result = from(array);
    result.subscribe(x => console.log(x));
  }




}
