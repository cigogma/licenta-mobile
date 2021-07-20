import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationDevicesComponent, StationDeviceComponent } from './pages';

const routes: Routes = [
  { path: '', component: StationDevicesComponent },
  { path: ':stationDevice', component: StationDeviceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationDevicesRoutingModule {}
