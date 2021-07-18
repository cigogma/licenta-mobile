import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationDeviceRoutingModule } from './station-device-routing.module';
import { StationDeviceComponent } from './station-device.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [StationDeviceComponent],
  imports: [IonicModule, CommonModule, StationDeviceRoutingModule],
})
export class StationDeviceModule {}
