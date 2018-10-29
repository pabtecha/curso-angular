import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private  spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe((params: any ) => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });

  }

  getArtista(id: string) {
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe( (data: any) => {
      this.artista = data;
      });
    this.loading = false;
    console.log(this.artista)
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
