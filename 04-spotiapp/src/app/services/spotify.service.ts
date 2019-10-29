import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor( private http: HttpClient ) {
    console.log('Spoty listo');
  }

  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${ query }`;
    const token = 'QD5eWmnum4nAX_mC3wLyuxexpMmEeaGYwJuNC29TIdp6axeVwvHUy4Ut43S9AaO1F0IMSRGYoUpD1PtBfg';
    const headers = new HttpHeaders({'Authorization': `Bearer ${ token }` });

    return this.http.get(url, {headers });
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases?country=ES&offset=0&limit=20').pipe( map( (data: any ) => {
        return data.albums.items;
    }));
  }

  buscarArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe(map((data: any) =>  data.artists.items ));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=es`)
      .pipe(map((data: any) =>  data.tracks));
  }
}
