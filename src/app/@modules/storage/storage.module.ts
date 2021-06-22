import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicStorageModule.forRoot({
      name: 'licenta',
      driverOrder: [Drivers.IndexedDB],
    }),
  ],
})
export class StorageModule {
  public static forRoot(): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [StorageService],
    };
  }
}
