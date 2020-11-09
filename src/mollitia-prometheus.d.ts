import 'mollitia';
import { PrometheusCircuitData, PrometheusCircuitOptions } from './circuit';
import { PrometheusModuleData, PrometheusModuleOptions } from './module';
import { PrometheusTimeoutData } from './module/timeout';

declare module 'mollitia' {
  // Circuit
  interface CircuitOptions {
    prometheus: PrometheusCircuitOptions;
  }
  interface Circuit {
    prometheus: PrometheusCircuitData;
    fn (func: (...params: any[]) => Promise<any>, funcName?: string): Circuit;
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
