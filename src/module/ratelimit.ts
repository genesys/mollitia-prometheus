import * as Mollitia from 'mollitia';
import { PrometheusModuleOptions } from './index';
import { commonMetrics, PrometheusCommonMetrics } from '../common';
import { PrometheusMetric } from '../metrics';

interface PrometheuRatelimitMetrics extends PrometheusCommonMetrics {
  [key: string]: PrometheusMetric;
}

export interface PrometheuRatelimitData extends PrometheusModuleOptions {
  metrics: PrometheuRatelimitMetrics;
  scrap (): string;
}

export const attachMetrics = (module: Mollitia.Module, options: Mollitia.ModuleOptions): PrometheuRatelimitMetrics => {
  const metrics = commonMetrics(module, options);
  // TODO total_failures_ratelimit
  return metrics;
}
