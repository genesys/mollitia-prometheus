---
title: Mollitia Prometheus
description: Prometheus Mollitia Addon
---

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=genesys_mollitia-prometheus&metric=alert_status)](https://sonarcloud.io/dashboard?id=genesys_mollitia-prometheus)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=genesys_mollitia-prometheus&metric=coverage)](https://sonarcloud.io/dashboard?id=genesys_mollitia-prometheus)
[![Version](https://img.shields.io/npm/v/@mollitia/prometheus)](https://www.npmjs.com/package/@mollitia/prometheus)
[![Downloads](https://img.shields.io/npm/dt/@mollitia/prometheus)](https://www.npmjs.com/package/@mollitia/prometheus)
[![License](https://img.shields.io/npm/l/@mollitia/prometheus)](https://github.com/cadgerfeast/@mollitia/prometheus/blob/master/LICENSE)

The `Mollitia` [Prometheus](https://prometheus.io/) addon adds metrics on every circuit and module so that you can monitor and analyze your applications.

## Documentation

[Full documentation website can be found here.](https://genesys.github.io/mollitia-prometheus/)

## Installation

### With Node or any web UI Framework

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

``` typescript
// ES6 or TypeScript
import * as Mollitia from 'mollitia';
import { PrometheusAddon } from '@mollitia/prometheus';

Mollitia.use(new PrometheusAddon());
```

### With CDN

``` html
<!-- CDN -->
<script type="text/javascript" src="https://unpkg.com/mollitia"></script>
<script type="text/javascript" src="https://unpkg.com/@mollitia/prometheus"></script>
<script>
  window.Mollitia.use(new window.MollitiaPrometheus.PrometheusAddon());
</script>
```

## Features

- Works on Node and on browser (even **Internet Explorer 11**, wow).
- Adds metrics for each circuit and module created on your application.
- Allow labels to be added so that you can monitor easily.
