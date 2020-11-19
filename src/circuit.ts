import * as Mollitia from 'mollitia';
import { commonMetrics, PrometheusCommonMetrics } from './common';
import { PrometheusLabels, PrometheusMetric } from './metrics';

interface PrometheusCircuitMetrics extends PrometheusCommonMetrics {
  [key: string]: PrometheusMetric;
}

export interface PrometheusCircuitOptions {
  name: string;
  prefix?: string;
  perMethod?: boolean;
  methodName?: string;
  labels?: PrometheusLabels;
}

export interface PrometheusCircuitData extends PrometheusCircuitOptions {
  metrics: PrometheusCircuitMetrics;
  scrap (): string;
}

export const attachMetrics = (circuit: Mollitia.Circuit, options: Mollitia.CircuitOptions): PrometheusCircuitMetrics => {
  const metrics = commonMetrics(circuit, options);
  return metrics;
}
