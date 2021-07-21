import { DeviceSample } from './device-sample.models';
import { Measurement } from './measurement.model';
import { DeviceSensor } from './sensor.model';

export interface StationDevice {
  id: number;
  station_id: number;
  alias: string;
  mac: string;
  sensors: DeviceSensor[];
}
