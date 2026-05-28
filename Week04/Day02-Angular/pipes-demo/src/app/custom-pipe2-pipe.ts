import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe2',
})
export class CustomPipe2Pipe implements PipeTransform {
  transform(cities: string[]): string[] {
    return [...cities].sort((a,b)=>a.length - b.length);;
  }
}