import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Heroe } from '../interfaces/heroe.interface';



@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL:string = 'https://angular-heroes-app.firebaseio.com/heroes.json'
  heroeURL:string = 'https://angular-heroes-app.firebaseio.com/heroes/'

  constructor(private http:HttpClient) { }

  getHeroeURL(key$:string){
    return `${ this.heroeURL}/${ key$}.json`
  }

  getHeroeBody(heroe:Heroe){
    return JSON.stringify(heroe)
  }

  getHeroesHeaders(){
    return new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getHeroes(){
    return this.http.get(this.heroesURL);
  }

  getHeroe(key$:string){
    return this.http.get(this.getHeroeURL(key$));
  }

  nuevoHeroe(heroe:Heroe){
    return this.http.post(this.heroesURL, this.getHeroeBody(heroe), { headers:this.getHeroesHeaders() });
  }

  actualizarHeroe(heroe:Heroe, key$:string){
    return this.http.put(this.getHeroeURL(key$), this.getHeroeBody(heroe), { headers: this.getHeroesHeaders()});
  }

  borrarHeroe(key$:string){
    return this.http.delete(this.getHeroeURL(key$))
  }
}
