import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  }

  nuevo: boolean = false;
  id: string;
  constructor(private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.nuevo = this.id === 'nuevo'
      
      if (!this.nuevo){
        this.heroesService.getHeroe(this.id).subscribe( (data:any) => {
          this.heroe = data;
        })
      }
    })
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);
    if (this.nuevo) {
      this.heroesService.nuevoHeroe(this.heroe)
        .subscribe((data: any) => {
          console.log('heroeSavedInFirebase', data);
          this.router.navigate(['/heroe', data.name]);
        },
          error => console.log(error));

    } else {
      this.heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe((data: any) => {
          console.log('heroeUpdatedInFirebase', data);
          this.router.navigate(['/heroe', data.name]);
        },
          error => console.log(error));
    }
  }

  agregarNuevo(formulario: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    formulario.reset({
      casa: "Marvel"
    })
  }
}

