import { PrometheusLabels, PrometheusMetrics } from '../metrics';

export interface PrometheusModuleOptions {
  name: string;
  prefix?: string;
  labels?: PrometheusLabels;
}
export interface PrometheusModuleData extends PrometheusModuleOptions {
  metrics: PrometheusMetrics;
  scrap (): string;
}
