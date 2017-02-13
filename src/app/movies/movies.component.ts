import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MoviesDataService } from './movies-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor( private moviesDataService: MoviesDataService) {}

  ngOnInit() {
    this.moviesDataService.getMovies()
        .subscribe(movies => this.movies = movies);
  }

}
