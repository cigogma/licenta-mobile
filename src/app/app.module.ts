import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { StorageModule } from './@modules/storage/storage.module';
import { AuthenticationModule } from './@modules/authentication';
import { ApiService } from './services/api.service';
import { AlertModule } from './@modules/alert/alert.module';
import { HttpClientModule } from '@angular/common/http';
import { StationModule } from './@modules/station';
import { MomentModule } from 'ngx-moment';
import { StationDeviceModule } from './@modules/station-device';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot(),
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
    StationModule,
    StationDeviceModule,
    MomentModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StorageModule.forRoot(),
    AuthenticationModule.forRoot(),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
