import * as Mollitia from 'mollitia';
import { PrometheusCounter } from './metrics/counter';

// TODO
interface PrometheusCircuitMetrics {
  total_count: PrometheusCounter;
}

export interface PrometheusCircuitOptions {
  name: string;
}
export interface PrometheusCircuitData extends PrometheusCircuitOptions {
  metrics: PrometheusCircuitMetrics;
  scrap (): string;
}

export const attachMetrics = (module: Mollitia.Circuit): PrometheusCircuitMetrics => {
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
