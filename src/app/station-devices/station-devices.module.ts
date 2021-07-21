import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationDevicesRoutingModule } from './station-devices-routing.module';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import { StationDeviceComponent, StationDevicesComponent } from './pages';
import { ChartComponent } from './@components';
import { SensorChartComponent } from './@components/sensor-chart/sensor-chart.component';

@NgModule({
  declarations: [
    StationDevicesComponent,
    StationDeviceComponent,
    ChartComponent,
    SensorChartComponent,
  ],
  imports: [
    CommonModule,
    StationDevicesRoutingModule,
    IonicModule,
    ChartsModule,
  ],
})
export class StationDevicesModule {}
