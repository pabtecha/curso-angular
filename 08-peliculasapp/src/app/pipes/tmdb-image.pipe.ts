import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tmdbImage'
})
export class TmdbImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'http://image.tmdb.org/t/p/w300/' + value;
  }

}
