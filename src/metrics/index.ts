export enum PrometheusMetricType {
  COUNTER = 'counter'
}

export interface PrometheusMetrics {
  [key: string]: PrometheusMetric;
}

export interface PrometheusMetric {
  key: string;
  type: PrometheusMetricType;
  labels: PrometheusLabels;
  scrap (): string;
  scrapHelp (): string;
  scrapValues (): string;
}

export interface PrometheusLabels {
  [key: string]: string;
}
