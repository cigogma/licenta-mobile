import { DeviceSample } from './device-sample.models';
import { Measurement } from './measurement.model';

export interface StationDevice {
  id: number;
  station_id: number;
  alias: string;
  mac: string;
  measurements: Measurement;
}
