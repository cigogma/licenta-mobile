import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from './services/loader.service';
import { AlertService } from './services/alert.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlertModule {
  public static forRoot(): ModuleWithProviders<AlertModule> {
    return {
      ngModule: AlertModule,
      providers: [AlertService, LoaderService]
    };
  }
 }
