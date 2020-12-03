import * as Mollitia from 'mollitia';
import { PrometheusModuleOptions } from './index';
import { commonMetrics, PrometheusCommonMetrics } from '../common';
import { PrometheusMetric } from '../metrics';

interface PrometheusRatelimitMetrics extends PrometheusCommonMetrics {
  [key: string]: PrometheusMetric;
}

export interface PrometheusRatelimitData extends PrometheusModuleOptions {
  metrics: PrometheusRatelimitMetrics;
  scrap (): string;
}

export const attachMetrics = (module: Mollitia.Module, options: Mollitia.ModuleOptions): PrometheusRatelimitMetrics => {
  const metrics = commonMetrics(module, options);
  // TODO total_failures_ratelimit
  return metrics;
}
