import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { StationEffects } from './effects';
import { StoreModule } from '@ngrx/store';
import { stationReducer } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([StationEffects]),
    StoreModule.forFeature(
      stationReducer.stationsFeatureKey,
      stationReducer.reducer
    ),
  ],
})
export class StationModule {}
