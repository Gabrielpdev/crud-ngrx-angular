import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MovieEffects } from './movie.effects';
import { movieReducer } from './movie.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('movie', movieReducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
})
export class MovieStoreModule {}
