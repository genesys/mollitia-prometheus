---
title: Prometheus - Getting Started
---
# Getting Started

Install and add the addon to `Mollitia` in your application.

``` bash
# Install mollitia
npm install mollitia --save
# Install the prometheus addon
npm install @mollitia/prometheus --save
```

``` javascript
// Javascript
const Mollitia = require('mollitia');
const { PrometheusAddon } = require('@mollitia/prometheus');

Mollitia.use(new PrometheusAddon());
```

Then, add `Prometheus` options when creating circuits or modules:

``` javascript
const myModule = new Mollitia.Timeout({
    prometheus: {
      name: 'my-module'
    }
});
const myCircuit = new Mollitia.Circuit({
  options: {
    prometheus: {
      name: 'my-circuit',
      labels: {
        tag2: 'val2',
        tag3: 'val3'
      }
    }
  }
});

// ...

const myCircuitMetrics = myCircuit.prometheus.metrics; // Will return an object containing all metrics from this circuit
const myCircuitScrap = myCircuit.prometheus.scrap(); // Will return the Prometheus scrap from this circuit
```

Finally, you can get `Prometheus` metrics or scrap like this:

``` javascript
const metrics = Mollitia.metrics(); // Will return an object containing all metrics from all circuits and modules
const scrap = Mollitia.scrap(); // Will return the Prometheus scrap, find an example below
```

<!-- TODO scrap example -->
