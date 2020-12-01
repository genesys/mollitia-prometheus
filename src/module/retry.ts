import * as Mollitia from 'mollitia';
import { PrometheusModuleOptions } from './index';
import { commonMetrics, PrometheusCommonMetrics } from '../common';
import { PrometheusMetric } from '../metrics';

interface PrometheusRetryMetrics extends PrometheusCommonMetrics {
  [key: string]: PrometheusMetric;
}

export interface PrometheusRetryData extends PrometheusModuleOptions {
  metrics: PrometheusRetryMetrics;
  scrap (): string;
}

export const attachMetrics = (module: Mollitia.Module, options: Mollitia.ModuleOptions): PrometheusRetryMetrics => {
  const metrics = commonMetrics(module, options);
  // TODO success_without_retry
  // TODO success_with_retry
  // TODO failures_without_retry
  // TODO failures_with_retry
  return metrics;
}
