import { createAction, props } from '@ngrx/store';
import { IMovie } from '../../interfaces/movie.interface';

const prefix = '[Movies]';

export const getMovies = createAction(`${prefix} Get Movies`);
export const getMoviesSuccess = createAction(
  `${getMovies.type} Success`,
  props<{
    movies: IMovie[];
  }>()
);

export const createMovie = createAction(
  `${prefix} Create Movie`,
  props<{
    movie: IMovie;
  }>()
);

export const createMovieSuccess = createAction(
  `${createMovie.type} Success`,
  props<{
    movie: IMovie;
  }>()
);

export const updateMovie = createAction(
  `${prefix} Update Movie`,
  props<{
    movie: IMovie;
  }>()
);

export const updateMovieSuccess = createAction(
  `${updateMovie.type} Success`,
  props<{
    movie: IMovie;
  }>()
);

export const deleteMovie = createAction(
  `${prefix} Delete Movie`,
  props<{
    movie: IMovie;
  }>()
);
export const deleteMovieSuccess = createAction(
  `${deleteMovie.type} Success`,
  props<{
    movie: IMovie;
  }>()
);
