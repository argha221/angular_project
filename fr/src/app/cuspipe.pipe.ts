import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuspipe'
})
export class CuspipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender=="male")
    return "MR"+ " "+value ;
    else
    return "MRS"+ " "+value;
  }

}
