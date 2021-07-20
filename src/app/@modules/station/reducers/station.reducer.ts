import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Station } from '../models/station.model';
import * as StationActions from '../actions/station.actions';

export const stationsFeatureKey = 'stations';

export interface State extends EntityState<Station> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Station> = createEntityAdapter<Station>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(StationActions.addStation, (state, action) =>
    adapter.addOne(action.station, state)
  ),
  on(StationActions.upsertStation, (state, action) =>
    adapter.upsertOne(action.station, state)
  ),
  on(StationActions.addStations, (state, action) =>
    adapter.addMany(action.stations, state)
  ),
  on(StationActions.upsertStations, (state, action) =>
    adapter.upsertMany(action.stations, state)
  ),
  on(StationActions.updateStation, (state, action) =>
    adapter.updateOne(action.station, state)
  ),
  on(StationActions.updateStations, (state, action) =>
    adapter.updateMany(action.stations, state)
  ),
  on(StationActions.deleteStation, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(StationActions.deleteStations, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(StationActions.loadStations, (state, action) =>
    adapter.setAll(action.stations, state)
  ),
  on(StationActions.clearStations, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
