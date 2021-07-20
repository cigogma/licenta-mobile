export interface SampleDataSet {
  data: number[];
  label: string;
}

export interface DeviceSample {
  labels: string[];
  dataSets: SampleDataSet[];
  startDate: Date;
  endDate: Date;
  dateInterval: string;
}
