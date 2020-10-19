import { PrometheusMetric } from '../metrics';

export interface PrometheusModuleOptions {
  name: string;
}
export interface PrometheusModuleData extends PrometheusModuleOptions {
  metrics: {
    [key: string]: PrometheusMetric;
  };
  scrap (): string;
}
