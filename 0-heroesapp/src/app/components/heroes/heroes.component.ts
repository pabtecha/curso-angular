import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] =  [];
  loading:boolean = true;

  constructor(private heroesService: HeroesService,
    private router: Router) { 

      this.heroesService.getHeroes().subscribe( (data:any)=> {
        console.log(data);

        this.heroes = data
        this.loading = false;
      })
    }

  ngOnInit() {
  }

  borrarHeroe(key$:string){
    this.heroesService.borrarHeroe(key$).subscribe( data => {
      if( data ){
        console.log('heroe borrado');
      }else{
        delete this.heroes[key$];
      }
      
    })
  }

}
