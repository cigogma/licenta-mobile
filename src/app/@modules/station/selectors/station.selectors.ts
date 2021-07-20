import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromStations } from '../reducers';

export const selectState = createFeatureSelector<fromStations.State>(
  fromStations.stationsFeatureKey
);

// export const selectLoaded = createSelector(
//   selectState,
//   (state: fromVehicleType.State) => state.loaded
// );
// export const selectLoading = createSelector(
//   selectState,
//   (state: fromVehicleType.State) => !state.loaded
// );

export const selectAll = createSelector(selectState, fromStations.selectAll);

export const selectEntities = createSelector(
  selectState,
  fromStations.selectEntities
);

export const selectTotal = createSelector(
  selectState,
  fromStations.selectTotal
);

export const selectIds = createSelector(selectState, fromStations.selectTotal);

export const selectId = (id) =>
  createSelector(selectEntities, (objects) => objects[id]);
