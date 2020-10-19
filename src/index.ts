import * as Mollitia from 'mollitia';
import * as PrometheusCircuit from './circuit';
import * as PrometheusTimeout from './module/timeout';

interface ScrapMetrics {
  [key: string]: {
    help: string;
    value: string;
  }
}

export const scrap = (): string => {
  const metrics: ScrapMetrics = {};
  for (const circuit of Mollitia.circuits) {
    for (const metric in circuit.prometheus.metrics) {
      if (metrics[metric]) {
        metrics[metric].value += circuit.prometheus.metrics[metric].scrapValues();
      } else {
        metrics[metric] = {
          help: circuit.prometheus.metrics[metric].scrapHelp(),
          value: circuit.prometheus.metrics[metric].scrapValues() 
        }
      }
    }
  }
  for (const module of Mollitia.modules) {
    for (const metric in module.prometheus.metrics) {
      if (metrics[metric]) {
        metrics[metric].value += module.prometheus.metrics[metric].scrapValues();
      } else {
        metrics[metric] = {
          help: module.prometheus.metrics[metric].scrapHelp(),
          value: module.prometheus.metrics[metric].scrapValues() 
        }
      }
    }
  }
  let str = '';
  for (const metric in metrics) {
    str += `${metrics[metric].help}${metrics[metric].value}`;
  }
  return str;
};

export class PrometheusPlugin implements Mollitia.Plugin {
  // Lifecycle
  onCircuitCreate (circuit: Mollitia.Circuit, options: Mollitia.CircuitOptions): void {
    circuit.prometheus = {
      name: options.prometheus.name,
      labels: options.prometheus.labels || {},
      metrics: PrometheusCircuit.attachMetrics(circuit, options),
      scrap: () => {
        let scrap = '';
        for (const metric in circuit.prometheus.metrics) {
          scrap += circuit.prometheus.metrics[metric].scrap();
        }
        return scrap;
      }
    };
  }
  onModuleCreate (module: Mollitia.Module, options: Mollitia.ModuleOptions): void {
    let attachMetrics;
    switch (module.constructor) {
      case Mollitia.Timeout: {
        attachMetrics = PrometheusTimeout.attachMetrics;
        break;
      }
      default: {
        attachMetrics = () => { return {}; };
      }
    }
    module.prometheus = {
      name: options.prometheus.name,
      labels: options.prometheus.labels || {},
      metrics: attachMetrics(module, options),
      scrap: () => {
        let scrap = '';
        for (const metric in module.prometheus.metrics) {
          scrap += module.prometheus.metrics[metric].scrap();
        }
        return scrap;
      }
    };
  }
}
