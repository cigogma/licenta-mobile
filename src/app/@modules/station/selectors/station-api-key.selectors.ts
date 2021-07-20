import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromStationApiKeys } from '../reducers';

export const selectState = createFeatureSelector<fromStationApiKeys.State>(
  fromStationApiKeys.stationApiKeysFeatureKey
);

// export const selectLoaded = createSelector(
//   selectState,
//   (state: fromVehicleType.State) => state.loaded
// );
// export const selectLoading = createSelector(
//   selectState,
//   (state: fromVehicleType.State) => !state.loaded
// );

export const selectAll = createSelector(
  selectState,
  fromStationApiKeys.selectAll
);

export const selectEntities = createSelector(
  selectState,
  fromStationApiKeys.selectEntities
);

export const selectTotal = createSelector(
  selectState,
  fromStationApiKeys.selectTotal
);

export const selectAllFromStation = (id: number | string) =>
  createSelector(selectAll, (objects) => {
    return objects.filter((d) => d.station_id == id);
  });

export const selectIds = createSelector(
  selectState,
  fromStationApiKeys.selectTotal
);

export const selectId = (id) =>
  createSelector(selectEntities, (objects) => objects[id]);
