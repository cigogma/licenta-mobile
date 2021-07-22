import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationDevicesRoutingModule } from './station-devices-routing.module';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import { EditPage, StationDeviceComponent } from './pages';
import { ChartComponent } from './@components';
import { SensorChartComponent } from './@components/sensor-chart/sensor-chart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StationDeviceComponent,
    ChartComponent,
    EditPage,
    SensorChartComponent,
  ],
  imports: [
    CommonModule,
    StationDevicesRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
})
export class StationDevicesModule {}
