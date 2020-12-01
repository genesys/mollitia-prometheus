import * as Mollitia from 'mollitia';
import { PrometheusModuleOptions } from './index';
import { commonMetrics, PrometheusCommonMetrics } from '../common';
import { PrometheusMetric } from '../metrics';

interface PrometheusFallbackMetrics extends PrometheusCommonMetrics {
  [key: string]: PrometheusMetric;
}

export interface PrometheusFallbackData extends PrometheusModuleOptions {
  metrics: PrometheusFallbackMetrics;
  scrap (): string;
}

export const attachMetrics = (module: Mollitia.Module, options: Mollitia.ModuleOptions): PrometheusFallbackMetrics => {
  const metrics = commonMetrics(module, options);
  return metrics;
}
