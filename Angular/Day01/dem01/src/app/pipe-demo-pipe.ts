import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDemo',
})
export class PipeDemoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
