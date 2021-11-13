import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detailPanneaux'
})
export class DetailPanneauxPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
