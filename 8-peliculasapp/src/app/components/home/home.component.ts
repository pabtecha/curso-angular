import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/providers/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mostPopularMovies: any[] = [];
  mostPopularMoviesKids: any[] = [];
  moviesInTheaters: any[] = [];

  constructor(private moviesProvider: MoviesService) { 
    
    this.moviesProvider.getMostPopular().subscribe( (data:any) => {
      this.mostPopularMovies = data['results'];
    })
    
    this.moviesProvider.getMostPopularForKids().subscribe((data: any) => {
      this.mostPopularMoviesKids = data['results'];
    })
    
    this.moviesProvider.getMoviesInTheaters().subscribe((data: any) => {
      this.moviesInTheaters = data['results'];
    })
  }


}
