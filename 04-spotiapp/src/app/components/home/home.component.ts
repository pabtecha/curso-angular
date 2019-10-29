import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  mensajeError: string;

  constructor( private  spotifyService: SpotifyService ) {
    this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe( (response: any[]) => {
      this.nuevasCanciones = response;

      for (let i = 0; i < this.nuevasCanciones.length; i++) {
        this.nuevasCanciones[i]['tags'] = [];

        for (let j = 0; j < this.nuevasCanciones[i].artists.length; j++) {
          const nombreArtista = this.nuevasCanciones[i].artists[j].name;
          this.nuevasCanciones[i]['tags'].push(nombreArtista);
        }
      }

      this.loading = false;
    },
        ( error: any ) => {
        console.log(error);
        this.loading = false;
        this.mensajeError = error.error.error.message;
        });
  }

  ngOnInit() {
  }

}
