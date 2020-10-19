import * as Mollitia from 'mollitia';
import { PrometheusLabels, PrometheusMetric } from './metrics';
import { PrometheusCounter } from './metrics/counter';

interface PrometheusCircuitMetrics {
  [key: string]: PrometheusMetric;
  total_executions: PrometheusCounter;
}

export interface PrometheusCircuitOptions {
  name: string;
  labels?: PrometheusLabels;
}

export interface PrometheusCircuitData extends PrometheusCircuitOptions {
  metrics: PrometheusCircuitMetrics;
  scrap (): string;
}

export const attachMetrics = (circuit: Mollitia.Circuit, options: Mollitia.CircuitOptions): PrometheusCircuitMetrics => {
  // Total Count
  const total_executions = new PrometheusCounter(
    'total_executions',
    {
      description: 'Total Executions',
      labels: options.prometheus.labels
    }
  );
  circuit.on('execute', (circuit: Mollitia.Circuit) => {
    total_executions.inc(1, circuit.prometheus.name);
  });
  return {
    total_executions
  };
}
