import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/movie.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesList: IMovie[] = [
    {
      id: Math.random(),
      name: 'Movie 1',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: Math.random(),
      name: 'Movie 2',
      image: 'https://picsum.photos/200/300',
    },
  ];

  constructor() {}

  getMovies(): Observable<IMovie[]> {
    return of(this.moviesList);
  }

  create(movie: IMovie): Observable<IMovie> {
    this.moviesList = [...this.moviesList, movie];

    return of(movie);
  }
  update(updateMovie: IMovie): Observable<IMovie> {
    this.moviesList.map((movie) =>
      movie.id === updateMovie.id ? updateMovie : movie
    );

    return of(updateMovie);
  }

  delete(movie: IMovie): Observable<IMovie> {
    this.moviesList = this.moviesList.filter((b) => b.id !== movie.id);
    return of(movie);
  }
}
