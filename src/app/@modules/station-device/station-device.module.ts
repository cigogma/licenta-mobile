import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationDeviceService, DeviceSampleService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { fromStationDevice } from './reducers';
import { StationDeviceEffects } from './effects/station-device.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([StationDeviceEffects]),
    StoreModule.forFeature(
      fromStationDevice.stationDevicesFeatureKey,
      fromStationDevice.reducer
    ),
  ],

  providers: [DeviceSampleService, StationDeviceService],
})
export class StationDeviceModule {}
