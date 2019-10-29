import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  resultadoArtistas: any[] = [];

  loading: boolean;

  constructor(private spotifyService: SpotifyService ) {
    this.loading = false;
  }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;
    this.spotifyService.buscarArtistas(termino)
      .subscribe((response: any[]) => {
        this.resultadoArtistas = response;

        for (let artista of response){
          artista.tags = artista.genres;
        }
      });
    this.loading = false;

  }
}
