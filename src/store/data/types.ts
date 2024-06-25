export interface IGetDataset {
  type: 'browse-data' | 'published';
  address: string;
}

export interface IGenerateViews {
  datasetID: string;
  data: any;
}

export interface IDataset {
  item_hash?: string;
  name: string;
  desc: string;
  owner: string;
  price: string;
  ownsAllTimeseries: boolean;
  timeseriesIDs: string[];
}

export interface IUpdateDatasetAvailability {
  datasetID: string;
  available: boolean;
}

export type IDatasetTimeseries = { dataset: IDataset; timeseries: any[] };
