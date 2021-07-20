import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StationDeviceEffects } from './station-device.effects';

describe('StationDeviceEffects', () => {
  let actions$: Observable<any>;
  let effects: StationDeviceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StationDeviceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StationDeviceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
