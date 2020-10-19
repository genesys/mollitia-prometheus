import * as Mollitia from 'mollitia';
import * as PrometheusCircuit from './circuit';
import * as PrometheusTimeout from './module/timeout';

class PrometheusPlugin implements Mollitia.Plugin {
  // Lifecycle
  onCircuitCreate (circuit: Mollitia.Circuit, options?: Mollitia.CircuitOptions): void {
    // TODO extend circuit
    circuit.prometheus = {
      name: circuit.prometheus.name,
      metrics: PrometheusCircuit.attachMetrics(circuit),
      scrap: () => {
        let scrap = '';
        scrap += circuit.prometheus.metrics.total_count.scrap();
        return scrap;
      }
    };
  }
  onModuleCreate (module: Mollitia.Module, options?: Mollitia.ModuleOptions): void {
    // TODO extend module
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
      name: module.prometheus.name,
      metrics: attachMetrics(module),
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

export {
  PrometheusPlugin
}
