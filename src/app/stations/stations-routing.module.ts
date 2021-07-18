import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreatePage } from './pages/create/create.page';
import { StationComponent } from './pages/station/station.component';
import { StationsComponent } from './stations.component';

const routes: Routes = [
  { path: '', component: StationsComponent },
  { path: 'create', component: CreatePage },
  { path: ':station', component: StationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule],
})
export class StationsRoutingModule {}
