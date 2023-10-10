import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMovieState } from './movie.model';

export const selectMovieState = createFeatureSelector<IMovieState>('movie');
export const selectMoviesList = createSelector(
  selectMovieState,
  (state) => state.movies
);
export const selectMovieIsLoading = createSelector(
  selectMovieState,
  (state) => state.isLoading
);
