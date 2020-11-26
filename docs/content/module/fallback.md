---
title: Mollitia Prometheus - Module - Fallback
---
# Fallback

## Metrics

| Name               | Description                                    | Type      | 
|:-------------------|:-----------------------------------------------|:----------|
| `total_executions` | The amount of times the circuit has been used. | `Counter` |
| `total_success`    | The amount of times the circuit suceeded.      | `Counter` |
| `total_failures`   | The amount of times the circuit failed.        | `Counter` |
| `duration_max`     | The maximum duration of the circuit execution. | `Gauge`   |
| `duration_ave`     | The average duration of the circuit execution. | `Gauge`   |
| `duration_min`     | The minimum duration of the circuit execution. | `Gauge`   |
