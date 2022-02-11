import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name : 'myCurrency'})
export class MyCurrencyPipe implements PipeTransform
{
  transform(inputCurrency: number, arg1 : string, arg2? : string) : string {
    switch(arg1)
    {
      case "PKR":
        return `Rs. ${inputCurrency} ${arg2 == undefined ? '' : arg2}`;
        default:
          return inputCurrency.toString();

    }
  }

}
