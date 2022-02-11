import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name : 'removeSpace'})
export class RemoveSpacesPipe implements PipeTransform
{
  transform(inputString: string) {
    return inputString.replace(' ', '-');
  }

}
