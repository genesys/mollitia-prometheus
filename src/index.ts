import * as Mollitia from 'mollitia';
import * as PrometheusCircuit from './circuit';
import * as PrometheusTimeout from './module/timeout';
import * as PrometheusRetry from './module/timeout';

interface ValueMetrics {
  [key: string]: {
    circuits: {
      [key: string]: number;
    },
    modules: {
      [key: string]: {
        [key: string]: number;
      }
    }
  }
}

interface ScrapMetrics {
  [key: string]: {
    help: string;
    value: string;
  }
}

export const circuits: Mollitia.Circuit[] = [];
export const modules: Mollitia.Module[] = [];

export const metrics = (): ValueMetrics => {
  const _metrics: ValueMetrics = {};
  for (const circuit of circuits) {
    const circuitName = circuit.prometheus.name;
    for (const metric in circuit.prometheus.metrics) {
      if (_metrics[metric]) {
        _metrics[metric].circuits[circuitName] = circuit.prometheus.metrics[metric].values[circuitName];
      } else {
        _metrics[metric] = {
          circuits: {
            [circuitName]: circuit.prometheus.metrics[metric].values[circuitName] || 0
          },
          modules: {}
        };
      }
    }
  }
  for (const module of modules) {
    const moduleName = module.prometheus.name;
    for (const metric in module.prometheus.metrics) {
      if (Object.keys(module.prometheus.metrics[metric].values).length) {
        if (_metrics[metric]) {
          _metrics[metric].modules[moduleName] = module.prometheus.metrics[metric].values;
        } else {
          _metrics[metric] = {
            circuits: {},
            modules: {
              [moduleName]: module.prometheus.metrics[metric].values
            }
          };
        }
      }
    }
  }
  return _metrics;
};

export const scrap = (): string => {
  const _metrics: ScrapMetrics = {};
  for (const circuit of circuits) {
    for (const metric in circuit.prometheus.metrics) {
      if (_metrics[metric]) {
        _metrics[metric].value += circuit.prometheus.metrics[metric].scrapValues();
      } else {
        _metrics[metric] = {
          help: circuit.prometheus.metrics[metric].scrapHelp(),
          value: circuit.prometheus.metrics[metric].scrapValues()
        }
      }
    }
  }
  for (const module of modules) {
    for (const metric in module.prometheus.metrics) {
      if (_metrics[metric]) {
        _metrics[metric].value += module.prometheus.metrics[metric].scrapValues();
      } else {
        _metrics[metric] = {
          help: module.prometheus.metrics[metric].scrapHelp(),
          value: module.prometheus.metrics[metric].scrapValues() 
        }
      }
    }
  }
  let str = '';
  for (const metric in _metrics) {
    str += `${_metrics[metric].help}${_metrics[metric].value}\n`;
  }
  return str;
};

export class PrometheusPlugin implements Mollitia.Plugin {
  // Lifecycle
  onCircuitCreate (circuit: Mollitia.Circuit, options: Mollitia.CircuitOptions): void {
    if (options.prometheus) {
      circuit.prometheus = {
        name: options.prometheus.name,
        perMethod: options.prometheus.perMethod ? options.prometheus.perMethod : false,
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
      const _fn = circuit.fn.bind(circuit);
      circuit.fn = (promise: any, funcName?: string): Mollitia.Circuit => {
        circuit.prometheus.methodName = funcName || promise.name;
        return _fn(promise);
      };
      circuits.push(circuit);
    }
  }
  onModuleCreate (module: Mollitia.Module, options: Mollitia.ModuleOptions): void {
    if (options.prometheus) {
      let attachMetrics;
      switch (module.constructor.name) {
        case Mollitia.Timeout.name: {
          attachMetrics = PrometheusTimeout.attachMetrics;
          break;
        }
        case Mollitia.Retry.name: {
          attachMetrics = PrometheusRetry.attachMetrics;
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
      modules.push(module);
    }
  }
}
