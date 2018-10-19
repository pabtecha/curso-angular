import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesServices, Heroes} from '../../services/heroes.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroes[] = [];
  texto: string;
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesServices) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params['texto'];
      this.heroes = this._heroesService.buscarHeroes(params['texto']);
    });
  }



}
