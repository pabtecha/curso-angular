import { Component, OnInit } from '@angular/core';
import {HeroesServices, Heroes} from '../../services/heroes.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];
  constructor( private _heroesServices: HeroesServices,
               private router: Router) {
    console.log('constructor Heroes');
  }

  ngOnInit() {
    console.log('init');

    this.heroes = this._heroesServices.getHeroes();

    console.log(this.heroes);
  }

  verHeroe( idx: number ) {
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }

}
