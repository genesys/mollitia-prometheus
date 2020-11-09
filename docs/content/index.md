---
title: Mollitia Prometheus
description: Prometheus Mollitia Plugin
---

<!-- TODO Badges -->

# Mollitia Prometheus

The `Mollitia` [Prometheus](https://prometheus.io/) plugin adds metrics on every circuit and module so that you can monitor and analyze your applications.

## Documentation

<!-- TODO Change -->
[Full documentation website can be find here.](http://135.39.45.156:8081)

## Installation

### With Node or any web UI Framework

``` bash
# Install mollitia
npm install mollitia --save
# Install the prometheus plugin
npm install @mollitia/prometheus --save
```

``` javascript
// Javascript
const Mollitia = require('mollitia');
const { PrometheusPlugin } = require('@mollitia/prometheus');

Mollitia.use(new PrometheusPlugin());
```

``` typescript
// ES6 or TypeScript
import * as Mollitia from 'mollitia';
import { PrometheusPlugin } from '@mollitia/prometheus';

Mollitia.use(new PrometheusPlugin());
```

### With CDN

``` html
<!-- CDN -->
<script type="text/javascript" src="https://unpkg.com/mollitia"></script>
<script type="text/javascript" src="https://unpkg.com/@mollitia/prometheus"></script>
<script>
  window.Mollitia.use(window.MollitiaPrometheus.PrometheusPlugin());
</script>
```

## Features

<!-- TODO change links -->

- Works on Node and on browser (even **Internet Explorer 11**, wow).
- Adds metrics for each circuit and module created on your application, [find the list here.](http://135.39.45.156:8082)
- Allow labels to be added so that you can monitor easily.
