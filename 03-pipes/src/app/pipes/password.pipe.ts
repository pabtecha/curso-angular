import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'contrasenya'
})
export class ContrasenyaPipe implements PipeTransform {
  transform(value: string, activar: boolean = true): string {

    if ( activar ) {
      const numOfChars = value.length;
      return '*'.repeat(numOfChars);
    }

    return value;
  }
}
