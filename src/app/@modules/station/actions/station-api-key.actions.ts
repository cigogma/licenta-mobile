import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Station, StationApiKey } from '../models';
export const fetchStation = createAction(
  '[StationApiKey/API] Fetch All StationApiKeys',
  props<{ station: Station }>()
);

export const loadStationApiKeys = createAction(
  '[StationApiKey/API] Load StationApiKeys',
  props<{ stationApiKeys: StationApiKey[] }>()
);

export const addStationApiKey = createAction(
  '[StationApiKey/API] Add StationApiKey',
  props<{ stationApiKey: StationApiKey }>()
);

export const upsertStationApiKey = createAction(
  '[StationApiKey/API] Upsert StationApiKey',
  props<{ stationApiKey: StationApiKey }>()
);

export const addStationApiKeys = createAction(
  '[StationApiKey/API] Add StationApiKeys',
  props<{ stationApiKeys: StationApiKey[] }>()
);

export const upsertStationApiKeys = createAction(
  '[StationApiKey/API] Upsert StationApiKeys',
  props<{ stationApiKeys: StationApiKey[] }>()
);

export const updateStationApiKey = createAction(
  '[StationApiKey/API] Update StationApiKey',
  props<{ stationApiKey: Update<StationApiKey> }>()
);

export const updateStationApiKeys = createAction(
  '[StationApiKey/API] Update StationApiKeys',
  props<{ stationApiKeys: Update<StationApiKey>[] }>()
);

export const deleteStationApiKey = createAction(
  '[StationApiKey/API] Delete StationApiKey',
  props<{ id: number }>()
);

export const deleteStationApiKeys = createAction(
  '[StationApiKey/API] Delete StationApiKeys',
  props<{ ids: string[] }>()
);

export const clearStationApiKeys = createAction(
  '[StationApiKey/API] Clear StationApiKeys'
);
