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
import { KeyModalComponent } from './@modals/key-modal/key-modal.component';

@NgModule({
  entryComponents: [KeyModalComponent],
  declarations: [
    StationsComponent,
    StationComponent,
    StationDeviceItemComponent,
    CreatePage,
    EditPage,
    StationFormComponent,
    StationItemComponent,
    KeyModalComponent,
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
