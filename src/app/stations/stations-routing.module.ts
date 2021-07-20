import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  StationComponent,
  StationsComponent,
  EditPage,
  CreatePage,
} from './pages';

const routes: Routes = [
  { path: '', component: StationsComponent },
  { path: 'create', component: CreatePage },
  { path: ':station/edit', component: EditPage },
  { path: ':station', component: StationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule],
})
export class StationsRoutingModule {}
