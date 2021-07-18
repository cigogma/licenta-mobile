import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { StationsComponent } from './stations.component';
import { StationDeviceItemComponent } from './components/station-device-item/station-device-item.component';
import { IonicModule } from '@ionic/angular';
import { StationComponent } from './pages/station/station.component';
import { CreatePage } from './pages/create/create.page';
import { EditPage } from './pages/edit/edit.page';
import { StationFormComponent } from './components/station-form/station-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StationItemComponent } from './components/station-item/station-item.component';

@NgModule({
  declarations: [
    StationsComponent,
    StationComponent,
    StationDeviceItemComponent,
    CreatePage,
    EditPage,
    StationFormComponent,
    StationItemComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    StationsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class StationsModule {}
