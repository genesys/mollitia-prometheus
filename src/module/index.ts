import { PrometheusLabels, PrometheusMetrics } from '../metrics';

export interface PrometheusModuleOptions {
  name: string;
  labels?: PrometheusLabels;
}
export interface PrometheusModuleData extends PrometheusModuleOptions {
  metrics: PrometheusMetrics;
  scrap (): string;
}
