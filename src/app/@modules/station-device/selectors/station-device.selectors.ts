import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromStationDevice } from '../reducers';

export const selectState = createFeatureSelector<fromStationDevice.State>(
  fromStationDevice.stationDevicesFeatureKey
);

export const selectAll = createSelector(
  selectState,
  fromStationDevice.selectAll
);

export const selectEntities = createSelector(
  selectState,
  fromStationDevice.selectEntities
);

export const selectTotal = createSelector(
  selectState,
  fromStationDevice.selectTotal
);

export const selectAllFromStation = (id: number | string) =>
  createSelector(selectAll, (objects) => {
    return objects.filter((d) => d.station_id == id);
  });

export const selectIds = createSelector(
  selectState,
  fromStationDevice.selectTotal
);

export const selectId = (id) =>
  createSelector(selectEntities, (objects) => objects[id]);
