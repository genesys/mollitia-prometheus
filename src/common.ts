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
  let labels = options.prometheus.labels;
  if (executor.constructor.name !== Mollitia.Circuit.name) {
    labels = { ...labels, module: options.prometheus.name };
  }
  // Total Executions
  const total_executions = new PrometheusCounter(
    `${options.prometheus.prefix ? `${options.prometheus.prefix}_` : ''}total_executions`,
    {
      description: 'Total Executions',
      labels
    }
  );
  // Total Success
  const total_success = new PrometheusCounter(
    `${options.prometheus.prefix ? `${options.prometheus.prefix}_` : ''}total_success`,
    {
      description: 'Total Success',
      labels
    }
  );
  // Duration
  let totalDuration = 0;
  const duration_max = new PrometheusGauge(
    `${options.prometheus.prefix ? `${options.prometheus.prefix}_` : ''}duration_max`,
    {
      description: 'Maximum Duration of Circuit Execution',
      labels
    }
  );
  const duration_ave = new PrometheusGauge(
    `${options.prometheus.prefix ? `${options.prometheus.prefix}_` : ''}duration_ave`,
    {
      description: 'Average Duration of Circuit Execution',
      labels
    }
  );
  const duration_min = new PrometheusGauge(
    `${options.prometheus.prefix ? `${options.prometheus.prefix}_` : ''}duration_min`,
    {
      description: 'Minimum Duration of Circuit Execution',
      labels
    }
  );
  executor.on('execute', (executor: Mollitia.Circuit|Mollitia.Module, promise: Promise<any>) => {
    let metricName = '';
    if (executor.constructor.name === Mollitia.Circuit.name) {
      metricName = (executor as Mollitia.Circuit).prometheus.perMethod ? `${executor.prometheus.name}_${(executor as Mollitia.Circuit).prometheus.methodName}` : executor.prometheus.name;
    } else {
      metricName = executor.prometheus.name;
    }
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
