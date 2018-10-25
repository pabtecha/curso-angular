import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Nicolás';
  vector: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a: number = 0.23;
  salario: number = 12345.6;
  heroe = {
    'nombre': 'logan',
    'clave': 'Wolverine',
    'edad': 500,
    'direccion': {
      'calle': 'Calle falsa',
      'numero': '123'
    }
  };

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Data asincrona'), 3500);
  });

  hoy = new Date();

  nombre2 = 'nicolás terevinto';

  video = 'watch?v=1ScRRmFgigQ';

  activar: boolean = false;

  toggleActivar(){
    this.activar = !this.activar;
    console.log('Nuevo estado del pipe: ', this.activar);
  }
}
