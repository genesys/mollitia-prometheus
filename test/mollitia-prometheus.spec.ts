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
    const timeout = new Mollitia.Timeout({
      delay: 0,
      prometheus: {
        name: 'timeout1',
        labels: {
          tag1: 'val1'
        }
      }
    });
    const circuit1 = new Mollitia.Circuit({
      options: {
        prometheus: {
          name: 'circuit1',
          labels: {
            tag2: 'val2',
            tag3: 'val3'
          }
        },
        modules: [timeout]
      }
    });
    const circuit2 = new Mollitia.Circuit({
      options: {
        prometheus: {
          name: 'circuit2'
        },
        modules: [timeout]
      }
    });
    expect(timeout.prometheus.metrics.total_executions).toBeDefined();
    await circuit1.fn(successAsync).execute();
    expect(circuit1.prometheus.metrics.total_executions.values['circuit1']).toEqual(1);
    expect(timeout.prometheus.metrics.total_executions.values['circuit1']).toEqual(1);
    await circuit2.fn(successAsync).execute();
    await circuit2.fn(successAsync).execute();
    expect(circuit2.prometheus.metrics.total_executions.values['circuit2']).toEqual(2);
    expect(timeout.prometheus.metrics.total_executions.values['circuit2']).toEqual(2);
  });
});
