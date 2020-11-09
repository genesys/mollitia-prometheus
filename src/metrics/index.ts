export enum PrometheusMetricType {
  COUNTER = 'counter',
  GAUGE = 'gauge'
}

export interface PrometheusMetrics {
  [key: string]: PrometheusMetric;
}

export interface PrometheusMetricLabelValues {
  [key: string]: number;
}

export interface PrometheusMetric {
  key: string;
  type: PrometheusMetricType;
  labels: PrometheusLabels;
  // TODO
  values: any;
  scrap (): string;
  scrapHelp (): string;
  scrapValues (): string;
}

export interface PrometheusLabels {
  [key: string]: string;
}
