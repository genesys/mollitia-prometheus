import 'mollitia';
import { PrometheusCircuitData, PrometheusCircuitOptions } from './circuit';
import { PrometheusModuleData, PrometheusModuleOptions } from './module';
import { PrometheusTimeoutData } from './module/timeout';

declare module 'mollitia' {
  // Circuit
  interface Circuit {
    prometheus: PrometheusCircuitData;
  }
  interface CircuitOptions {
    prometheus: PrometheusCircuitOptions;
  }
  // Module
  interface Module {
    prometheus: PrometheusModuleData;
  }
  interface ModuleOptions {
    prometheus: PrometheusModuleOptions;
  }
  interface Timeout {
    prometheus: PrometheusTimeoutData;
  }
}
