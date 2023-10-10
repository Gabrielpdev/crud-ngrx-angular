import { Action, createReducer, on } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

import { IMovieState } from './movie.model';
import * as fromMovies from './index';

export const initialMovieState: IMovieState = {
  movies: [],
  isLoading: false,
};

const reducer = createReducer<IMovieState>(
  initialMovieState,
  on(fromMovies.getMovies, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromMovies.getMoviesSuccess, (state, { movies }) => {
    return {
      ...state,
      isLoading: false,
      movies,
    };
  }),
  on(fromMovies.createMovie, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromMovies.createMovieSuccess, (state, { movie }) => {
    return {
      ...state,
      movies: [...state.movies, movie],
      isLoading: false,
    };
  }),
  on(fromMovies.updateMovie, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromMovies.updateMovieSuccess, (state, { movie }) => {
    return {
      ...state,
      movies: state.movies.map((b) => (b.id === movie.id ? movie : b)),
      isLoading: false,
    };
  }),
  on(fromMovies.deleteMovie, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(fromMovies.deleteMovieSuccess, (state, { movie }) => {
    return {
      ...state,
      isLoading: false,
      movies: state.movies.filter((b) => b.id !== movie.id),
    };
  })
);

export function movieReducer(
  state = initialMovieState,
  actions: Action
): IMovieState {
  return reducer(state, actions);
}
