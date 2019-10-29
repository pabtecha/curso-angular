import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {

    if (todas) {
      const nombres = value.split(' ');

      for (let i in nombres) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1).toLowerCase();
      }

      return nombres.join(' ');
    } else {
      return value[0].toUpperCase() + value.substr(1).toLowerCase();
    }

  }
}
