import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import {
  StationComponent,
  StationsComponent,
  EditPage,
  CreatePage,
} from './pages';

import {
  StationDeviceItemComponent,
  StationFormComponent,
  StationItemComponent,
} from './@components';
import { MomentModule } from 'ngx-moment';

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
    MomentModule,
    StationsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class StationsModule {}
