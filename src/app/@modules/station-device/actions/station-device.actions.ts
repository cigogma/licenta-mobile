import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { StationDevice } from '../models/station-device.model';
import { Station } from '../../station/models';
export const fetchStation = createAction(
  '[StationDevice/API] Fetch station StationDevices',
  props<{ station: Station }>()
);
export const loadStationDevices = createAction(
  '[StationDevice/API] Load StationDevices',
  props<{ stationDevices: StationDevice[] }>()
);

export const addStationDevice = createAction(
  '[StationDevice/API] Add StationDevice',
  props<{ stationDevice: StationDevice }>()
);

export const upsertStationDevice = createAction(
  '[StationDevice/API] Upsert StationDevice',
  props<{ stationDevice: StationDevice }>()
);

export const addStationDevices = createAction(
  '[StationDevice/API] Add StationDevices',
  props<{ stationDevices: StationDevice[] }>()
);

export const upsertStationDevices = createAction(
  '[StationDevice/API] Upsert StationDevices',
  props<{ stationDevices: StationDevice[] }>()
);

export const updateStationDevice = createAction(
  '[StationDevice/API] Update StationDevice',
  props<{ stationDevice: Update<StationDevice> }>()
);

export const updateStationDevices = createAction(
  '[StationDevice/API] Update StationDevices',
  props<{ stationDevices: Update<StationDevice>[] }>()
);

export const deleteStationDevice = createAction(
  '[StationDevice/API] Delete StationDevice',
  props<{ id: number }>()
);

export const deleteStationDevices = createAction(
  '[StationDevice/API] Delete StationDevices',
  props<{ ids: string[] }>()
);

export const clearStationDevices = createAction(
  '[StationDevice/API] Clear StationDevices'
);
