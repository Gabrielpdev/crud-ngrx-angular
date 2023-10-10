import { IMovie } from '../../interfaces/movie.interface';

export interface IMovieState {
  movies: IMovie[];
  isLoading: boolean;
}
