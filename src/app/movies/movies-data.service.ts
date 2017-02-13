import { Injectable } from '@angular/core';
import { Movie }   from "./movie";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesDataService {

  private endpoint = 'app/movies/movies.json'

  constructor(private http: Http) {}

  getMovies(){
    return this.http.get(this.endpoint)
               .map(response => <Movie[]>response.json().data);
  }

}
