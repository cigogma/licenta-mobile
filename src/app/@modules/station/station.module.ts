import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { StationApiKeysEffects, StationEffects } from './effects';
import { StoreModule } from '@ngrx/store';
import { fromStationApiKeys, fromStations } from './reducers';
import { StationApiKeysService, StationsService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([StationEffects, StationApiKeysEffects]),
    StoreModule.forFeature(
      fromStations.stationsFeatureKey,
      fromStations.reducer
    ),
    StoreModule.forFeature(
      fromStationApiKeys.stationApiKeysFeatureKey,
      fromStationApiKeys.reducer
    ),
  ],
  providers: [StationApiKeysService, StationsService],
})
export class StationModule {}
