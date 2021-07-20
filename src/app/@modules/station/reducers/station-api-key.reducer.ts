import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { StationApiKey } from '../models';
import { StationApiKeyActions } from '../actions';

export const stationApiKeysFeatureKey = 'stationApiKeys';

export interface State extends EntityState<StationApiKey> {
  // additional entities state properties
}

export const adapter: EntityAdapter<StationApiKey> =
  createEntityAdapter<StationApiKey>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(StationApiKeyActions.addStationApiKey, (state, action) =>
    adapter.addOne(action.stationApiKey, state)
  ),
  on(StationApiKeyActions.upsertStationApiKey, (state, action) =>
    adapter.upsertOne(action.stationApiKey, state)
  ),
  on(StationApiKeyActions.addStationApiKeys, (state, action) =>
    adapter.addMany(action.stationApiKeys, state)
  ),
  on(StationApiKeyActions.upsertStationApiKeys, (state, action) =>
    adapter.upsertMany(action.stationApiKeys, state)
  ),
  on(StationApiKeyActions.updateStationApiKey, (state, action) =>
    adapter.updateOne(action.stationApiKey, state)
  ),
  on(StationApiKeyActions.updateStationApiKeys, (state, action) =>
    adapter.updateMany(action.stationApiKeys, state)
  ),
  on(StationApiKeyActions.deleteStationApiKey, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(StationApiKeyActions.deleteStationApiKeys, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(StationApiKeyActions.loadStationApiKeys, (state, action) =>
    adapter.setAll(action.stationApiKeys, state)
  ),
  on(StationApiKeyActions.clearStationApiKeys, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
