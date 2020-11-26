import * as Mollitia from 'mollitia';
import * as MollitiaPrometheus from './libs/mollitia-prometheus.es5';

Mollitia.use(new MollitiaPrometheus.PrometheusAddon());

export default (context, inject) => {
  inject('mollitia', Mollitia);
  inject('mollitiaPrometheus', MollitiaPrometheus);
}
