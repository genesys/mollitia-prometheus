---
title: Mollitia Prometheus - Module - Retry
---
# Retry

## Common Metrics

| Name               | Description                                   | Type      | 
|:-------------------|:----------------------------------------------|:----------|
| `total_executions` | The amount of times the module has been used. | `Counter` |
| `total_success`    | The amount of times the module suceeded.      | `Counter` |
| `total_failures`   | The amount of times the module failed.        | `Counter` |
| `duration_max`     | The maximum duration of the module execution. | `Gauge`   |
| `duration_ave`     | The average duration of the module execution. | `Gauge`   |
| `duration_min`     | The minimum duration of the module execution. | `Gauge`   |

## Retry Metrics

| Name                       | Description                                             | Type      | 
|:---------------------------|:--------------------------------------------------------|:----------|
| `success_without_retries`  | The amount of executions that succeed without retrying. | `Counter` |
| `success_with_retries`     | The amount of executions that succeed after retrying.   | `Counter` |
| `failures_without_retries` | The amount of executions that failed without retrying.  | `Counter` |
| `failures_with_retries`    | The amount of executions that failed after retrying.    | `Gauge`   |
