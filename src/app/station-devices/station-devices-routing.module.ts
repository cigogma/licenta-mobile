import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPage, StationDeviceComponent } from './pages';

const routes: Routes = [
  { path: ':stationDevice', component: StationDeviceComponent },
  { path: ':stationDevice/edit', component: EditPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationDevicesRoutingModule {}
