import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationDeviceComponent } from './station-device.component';

const routes: Routes = [{ path: '', component: StationDeviceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationDeviceRoutingModule { }
