import { DeviceSample } from './device-sample.models';
import { Measurement } from './measurement.model';

export interface StationDevice {
  alias: string;
  mac: string;
  measurements: Measurement;
}
