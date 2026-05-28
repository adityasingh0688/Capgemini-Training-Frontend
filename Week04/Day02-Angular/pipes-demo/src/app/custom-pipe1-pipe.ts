import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe1',
})
export class CustomPipe1Pipe implements PipeTransform {
  transform(city : string): string {
    if(city.length % 2 == 0){
      return city.toUpperCase();
    }
    return city.toLocaleLowerCase();
  }
}
