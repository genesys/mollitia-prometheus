import { PrometheusLabels, PrometheusMetric, PrometheusMetricType } from './index'

interface PrometheusCounterOptions {
  labels?: string[];
  description?: string;
}

export class PrometheusCounter implements PrometheusMetric {
  // Public Attributes
  public key: string;
  public type: PrometheusMetricType;
  public labels: string[];
  public value: number;
  public description?: string;
  // Constructor
  constructor (key: string, value = 0, options: PrometheusCounterOptions = {}) {
    this.key = key;
    this.type = PrometheusMetricType.COUNTER;
    this.value = value;
    this.labels = options?.labels || [];
    if (options?.description) { this.description = options?.description }
  }
  // Public Methods
  public inc (value = 1, labels?: PrometheusLabels): void {
    this.value += value;
  }
  public scrap (): string {
    const key = this.key;
    const description = this.description ? ` ${this.description}` : '';
    let str = '';
    str += `# HELP ${key}${description}\n`;
    str += `# TYPE ${key} ${this.type}\n`;
    str += `${key} ${this.value}\n`;
    return str;
  }
}
