import '../src/mollitia-prometheus.d';
import * as Mollitia from 'mollitia';
import * as MollitiaPrometheus from '../src/index';

Mollitia.use(new MollitiaPrometheus.PrometheusPlugin());

const successAsync = jest.fn().mockImplementation((res: unknown, delay = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, delay);
  });
});

// TODO docker prometheus will only be here for testing purpose

describe('mollitia-prometheus.ts', () => {
  it('should add metrics to circuits and modules', async () => {
    const circuit = new Mollitia.Circuit({
      options: {
        prometheus: {
          name: 'dummy'
        }
      }
    });
    expect(circuit.prometheus.scrap()).toEqual('');
    const timeout = new Mollitia.Timeout();
    expect(timeout.prometheus.metrics.total_count).toBeDefined();
    circuit.modules.push(timeout);
    await circuit.fn(successAsync).execute();
    expect(timeout.prometheus.metrics.total_count.value).toEqual(1);
  });
});
