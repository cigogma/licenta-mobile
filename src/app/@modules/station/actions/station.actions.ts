import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Station } from '../models/station.model';
export const fetchAll = createAction('[Station/API] Fetch All Stations');

export const loadStations = createAction(
  '[Station/API] Load Stations',
  props<{ stations: Station[] }>()
);

export const addStation = createAction(
  '[Station/API] Add Station',
  props<{ station: Station }>()
);

export const upsertStation = createAction(
  '[Station/API] Upsert Station',
  props<{ station: Station }>()
);

export const addStations = createAction(
  '[Station/API] Add Stations',
  props<{ stations: Station[] }>()
);

export const upsertStations = createAction(
  '[Station/API] Upsert Stations',
  props<{ stations: Station[] }>()
);

export const updateStation = createAction(
  '[Station/API] Update Station',
  props<{ station: Update<Station> }>()
);

export const updateStations = createAction(
  '[Station/API] Update Stations',
  props<{ stations: Update<Station>[] }>()
);

export const deleteStation = createAction(
  '[Station/API] Delete Station',
  props<{ id: number }>()
);

export const deleteStations = createAction(
  '[Station/API] Delete Stations',
  props<{ ids: string[] }>()
);

export const clearStations = createAction('[Station/API] Clear Stations');
