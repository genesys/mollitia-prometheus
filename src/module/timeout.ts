import * as Mollitia from 'mollitia';
import { PrometheusModuleOptions } from './index';
import { PrometheusCounter } from '../metrics/counter';
import { PrometheusMetrics } from '../metrics';

export interface PrometheusTimeoutData extends PrometheusModuleOptions {
  metrics: {
    total_executions: PrometheusCounter;
  };
  scrap (): string;
}

export const attachMetrics = (module: Mollitia.Module, options: Mollitia.ModuleOptions): PrometheusMetrics => {
  // Total Count
  const total_executions = new PrometheusCounter(
    'total_executions',
    {
      description: 'Total Executions',
      labels: {
        module: options.prometheus.name,
        ...options.prometheus.labels
      }
    }
  );
  module.on('execute', (circuit: Mollitia.Circuit) => {
    total_executions.inc(1, circuit.prometheus.name);
  });
  return {
    total_executions
  };
}
