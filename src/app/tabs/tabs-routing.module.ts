import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'stations',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/stations',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
