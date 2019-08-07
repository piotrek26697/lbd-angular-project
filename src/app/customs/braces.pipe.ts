import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'braces'
})
export class BracesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    return "(" + value + ")";
  }

}
