import * as Mollitia from 'mollitia';
import { PrometheusModuleOptions } from './index';
import { PrometheusCounter } from '../metrics/counter';
import { PrometheusMetrics } from '../metrics';

export interface PrometheusTimeoutOptions extends PrometheusModuleOptions {
  name: string;
}

export interface PrometheusTimeoutData extends PrometheusTimeoutOptions {
  metrics: {
    total_count: PrometheusCounter;
  };
  scrap (): string;
}

export const attachMetrics = (module: Mollitia.Module): PrometheusMetrics => {
  // Total Count
  const total_count = new PrometheusCounter(
    'total_count',
    0,
    {
      description: 'Total Count'
    }
  );
  module.on('execute', (circuit: Mollitia.Circuit) => {
    total_count.inc(1, {
      circuit: circuit.prometheus.name
    });
  });
  return {
    total_count
  };
}
