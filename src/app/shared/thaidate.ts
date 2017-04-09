import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'thaidate'})
export class ThaiDatePipe implements PipeTransform {
  transform(value: Date): any {
    if (!value) return value;

    var year = value.getFullYear();
    var month = value.getMonth();
    var day = value.getDate();
    var c = new Date(year + 543, month, day)

    return c; 
  }
}