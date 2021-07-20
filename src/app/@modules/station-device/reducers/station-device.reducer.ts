import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { StationDevice } from '../models/station-device.model';
import * as StationDeviceActions from '../actions/station-device.actions';

export const stationDevicesFeatureKey = 'stationDevices';

export interface State extends EntityState<StationDevice> {
  // additional entities state properties
}

export const adapter: EntityAdapter<StationDevice> = createEntityAdapter<StationDevice>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(StationDeviceActions.addStationDevice,
    (state, action) => adapter.addOne(action.stationDevice, state)
  ),
  on(StationDeviceActions.upsertStationDevice,
    (state, action) => adapter.upsertOne(action.stationDevice, state)
  ),
  on(StationDeviceActions.addStationDevices,
    (state, action) => adapter.addMany(action.stationDevices, state)
  ),
  on(StationDeviceActions.upsertStationDevices,
    (state, action) => adapter.upsertMany(action.stationDevices, state)
  ),
  on(StationDeviceActions.updateStationDevice,
    (state, action) => adapter.updateOne(action.stationDevice, state)
  ),
  on(StationDeviceActions.updateStationDevices,
    (state, action) => adapter.updateMany(action.stationDevices, state)
  ),
  on(StationDeviceActions.deleteStationDevice,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(StationDeviceActions.deleteStationDevices,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(StationDeviceActions.loadStationDevices,
    (state, action) => adapter.setAll(action.stationDevices, state)
  ),
  on(StationDeviceActions.clearStationDevices,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
