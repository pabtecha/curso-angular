import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesServices} from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesServices) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);

    });

  }

  ngOnInit() {
  }

}
