---
title: Mollitia Prometheus - Module - Timeout
---
# Timeout

## Timeout Metrics

| Name                     | Description                                     | Type      | 
|:-------------------------|:------------------------------------------------|:----------|
| `total_failures_timeout` | The amount of times an execution has timed out. | `Counter` |

## Common Metrics

| Name               | Description                                    | Type      | 
|:-------------------|:-----------------------------------------------|:----------|
| `total_executions` | The amount of times the module has been used. | `Counter` |
| `total_success`    | The amount of times the module suceeded.      | `Counter` |
| `total_failures`   | The amount of times the module failed.        | `Counter` |
| `duration_max`     | The maximum duration of the module execution. | `Gauge`   |
| `duration_ave`     | The average duration of the module execution. | `Gauge`   |
| `duration_min`     | The minimum duration of the module execution. | `Gauge`   |
