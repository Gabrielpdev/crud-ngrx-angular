import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './interfaces/movie.interface';
import { select, Store } from '@ngrx/store';
import * as fromMovies from './store/movies/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('nameElement') text!: ElementRef;
  @ViewChild('imageElement') image!: ElementRef;
  @ViewChild('editNameElement') editName!: ElementRef;
  @ViewChild('editImageElement') editImage!: ElementRef;

  isDisabled = 0;
  movies$?: Observable<IMovie[]>;
  isLoading$?: Observable<boolean>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }

  onCreateMovie(): void {
    const name = this.text.nativeElement.value;

    if (!name) {
      return;
    }

    this.store.dispatch(
      fromMovies.createMovie({
        movie: {
          id: Math.random(),
          image:
            this.image.nativeElement.value || 'https://picsum.photos/200/300',
          name,
        },
      })
    );
  }

  onAllowEdit(movie: IMovie): void {
    this.isDisabled = movie.id;
  }

  onUpdateMovie(movie: IMovie): void {
    const updatedMovie = {
      ...movie,
      image:
        this.editImage.nativeElement.value || 'https://picsum.photos/200/300',
      name: this.editName.nativeElement.value,
    };

    this.store.dispatch(fromMovies.updateMovie({ movie: updatedMovie }));
    this.isDisabled = 0;
  }

  onDeleteMovie(movie: IMovie): void {
    this.store.dispatch(fromMovies.deleteMovie({ movie }));
  }

  private initDispatch(): void {
    this.store.dispatch(fromMovies.getMovies());
  }

  private initSubscriptions(): void {
    this.movies$ = this.store.pipe(select(fromMovies.selectMoviesList));
    this.isLoading$ = this.store.pipe(select(fromMovies.selectMovieIsLoading));
  }
}
