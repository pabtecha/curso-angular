import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiToken = '3b3828dbeb462d5d87fc3f0492d06621';
  urlBase = 'https://api.themoviedb.org/3'

  constructor(private http: HttpClient) { }

  private __appendToken(params: any){
    params['api_key'] = this.apiToken
    return params
  }

  getMostPopular(){
    let url = `${ this.urlBase}/discover/movie`;
    let params = {
      sort_by: 'popularity.desc',
      language: 'es'
    }
    params = this.__appendToken(params)
    return this.http.get(url, { params })
  }

  getMostPopularForKids(){
    let url = `${ this.urlBase}/discover/movie`;

    let params = {
      sort_by: 'popularity.desc',
      language: 'es',
      'certification.lte': 'G'
    }
    params = this.__appendToken(params)

    return this.http.get(url, { params })
  }

  getMoviesInTheaters(){
    let url = `${ this.urlBase}/discover/movie`;
    let rdl = new Date()
    let rdg = new Date()
    rdg.setMonth(rdg.getMonth() - 2)
    let params = {
      'primary_release_date.gte': rdg.toISOString().slice(0,10),
      'primary_release_date.lte': rdl.toISOString().slice(0,10),
      'region': 'ES'
    }
    params = this.__appendToken(params)
    
    return this.http.get(url, { params })
  }
}
