import * as Mollitia from 'mollitia';
import { PrometheusModuleOptions } from '../index';
import { commonMetrics, PrometheusCommonMetrics } from '../../common';
import { PrometheusMetric } from '../../metrics';

interface PrometheuBreakerMetrics extends PrometheusCommonMetrics {
  [key: string]: PrometheusMetric;
}

export interface PrometheuBreakerData extends PrometheusModuleOptions {
  metrics: PrometheuBreakerMetrics;
  scrap (): string;
}

export const attachMetrics = (module: Mollitia.Module, options: Mollitia.ModuleOptions): PrometheuBreakerMetrics => {
  const metrics = commonMetrics(module, options);
  // TODO breaker_state
  // TODO failure_rate
  // TODO failure_slow_rate
  // TODO total_failures_open
  // TODO total_failures_slow
  return metrics;
}
