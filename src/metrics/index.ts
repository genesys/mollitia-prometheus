export enum PrometheusMetricType {
  COUNTER = 'counter'
}

export interface PrometheusMetrics {
  [key: string]: PrometheusMetric;
}

export interface PrometheusMetric {
  key: string;
  type: PrometheusMetricType;
  labels: string[];
  scrap (): string;
}

export interface PrometheusLabels {
  [key: string]: string;
}
