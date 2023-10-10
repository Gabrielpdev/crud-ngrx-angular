import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import * as fromMovies from './index';
import { MovieService } from '../../service/movie.service';
import { IMovie } from '../../interfaces/movie.interface';

@Injectable()
export class MovieEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly movieService: MovieService
  ) {}

  getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMovies.getMovies.type),
      switchMap(() => this.movieService.getMovies()),
      map((movies: IMovie[]) => fromMovies.getMoviesSuccess({ movies }))
    )
  );

  createMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMovies.createMovie),
      switchMap(({ movie }) => this.movieService.create(movie)),
      map((movie: IMovie) => fromMovies.createMovieSuccess({ movie }))
    )
  );

  updateMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMovies.updateMovie),
      switchMap(({ movie }) => this.movieService.update(movie)),
      map((movie: IMovie) => fromMovies.updateMovieSuccess({ movie }))
    )
  );

  deleteMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromMovies.deleteMovie),
      switchMap(({ movie }) => this.movieService.delete(movie)),
      map((movie: IMovie) => fromMovies.deleteMovieSuccess({ movie }))
    )
  );
}
