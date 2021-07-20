import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationDeviceService, DeviceSampleService } from './services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [DeviceSampleService, StationDeviceService],
})
export class StationDeviceModule {}
