import * as Mollitia from 'mollitia';
import { PrometheusMetric } from './metrics';
import { PrometheusCounter } from './metrics/counter';
import { PrometheusGauge } from './metrics/gauge';

export interface PrometheusCommonMetrics {
  [key: string]: PrometheusMetric;
  total_executions: PrometheusCounter;
  total_success: PrometheusCounter;
  duration_max: PrometheusGauge;
  duration_ave: PrometheusGauge;
  duration_min: PrometheusGauge;
}

export const commonMetrics = (executor: Mollitia.Circuit|Mollitia.Module, options: Mollitia.CircuitOptions|Mollitia.ModuleOptions): PrometheusCommonMetrics => {
  // Total Executions
  const total_executions = new PrometheusCounter(
    'total_executions',
    {
      description: 'Total Executions',
      labels: options.prometheus.labels
    }
  );
  // Total Success
  const total_success = new PrometheusCounter(
    'total_success',
    {
      description: 'Total Success',
      labels: options.prometheus.labels
    }
  );
  // Duration
  let totalDuration = 0;
  const duration_max = new PrometheusGauge(
    'duration_max',
    {
      description: 'Maximum Duration of Circuit Execution',
      labels: options.prometheus.labels
    }
  );
  const duration_ave = new PrometheusGauge(
    'duration_ave',
    {
      description: 'Average Duration of Circuit Execution',
      labels: options.prometheus.labels
    }
  );
  const duration_min = new PrometheusGauge(
    'duration_min',
    {
      description: 'Minimum Duration of Circuit Execution',
      labels: options.prometheus.labels
    }
  );
  executor.on('execute', (circuit: Mollitia.Circuit, promise: Promise<any>) => {
    const metricName = circuit.prometheus.perMethod ? `${circuit.prometheus.name}_${circuit.prometheus.methodName}` : circuit.prometheus.name;
    const start = Date.now();
    total_executions.inc(1, metricName);
    promise
      .then(() => {
        const duration = Date.now() - start;
        totalDuration += duration;
        const min = duration_min.get(metricName);
        if (!min || (min > duration)) {
          duration_min.set(duration, metricName);
        }
        const max = duration_max.get(metricName);
        if (!max || (max < duration)) {
          duration_max.set(duration, metricName);
        }
        const count =  total_success.inc(1, metricName);
        duration_ave.set(totalDuration / count, metricName);
      });
  });
  return {
    total_executions,
    total_success,
    duration_max,
    duration_ave,
    duration_min
  };
}
