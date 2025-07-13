---
title: Postgres Full-Text Search Comparison
description: Latency and results comparison for Postgres FTS and other search engines
author: migrated-from-data-blog
category: Benchmark
---

## Latency Comparison

| Query     | Meilisearch | Opensearch | Postgres | SQLite (Disk) | SQLite (Mem) | Typesense |
| --------- | ----------- | ---------- | -------- | ------------- | ------------ | --------- |
| awakening | 3.63        | 9.84       | 1.93     | 0.3           | 0.24         | 2.07      |
| comedy    | 3.46        | 40.1       | 3.55     | 4.25          | 2.91         | 3.14      |
| love      | 12.4        | 139.0      | 15.3     | 27.7          | 13.4         | 30.6      |
| romance   | 3.05        | 23.9       | 2.14     | 1.97          | 1.43         | 2.68      |
| spy       | 3.57        | 14.1       | 1.78     | 0.92          | 0.64         | 3.78      |
| superhero | 4.82        | 112.0      | 3.68     | 0.68          | 0.39         | 3.99      |
| superhero | 4.39        | 12.6       | 1.59     | 0.52          | 0.24         | 2.09      |
| superman  | 3.45        | 25         | 1.24     | 0.36          | 0.19         | 2.71      |
| suprman   | 2.69        | 6.78       | 1.0      | 0.08          | 0.06         | 2.83      |
| worldwar  | 8.53        | 149.0      | 2.94     | 5.02          | 2.93         | 3.26      |

## Results Count

| Query     | Meilisearch | Opensearch | Postgres | SQLite (Disk) | SQLite (Mem) | Typesense |
| --------- | ----------- | ---------- | -------- | ------------- | ------------ | --------- |
| awakening | 15          | 32         | 210      | 63            | 63           | 14        |
| comedy    | 67          | 756        | 1213     | 1220          | 1220         | 55        |
| love      | 812         | 3036       | 5417     | 4691          | 4691         | 745       |
| romance   | 35          | 383        | 630      | 554           | 554          | 34        |
| spy       | 47          | 168        | 349      | 241           | 241          | 47        |
| superhero | 56          | 431        | 34       | 20            | 20           | 8         |
| superhero | 14          | 45         | 86       | 67            | 67           | 8         |
| superman  | 41          | 25         | 47       | 47            | 47           | 28        |
| suprman   | 29          | 0          | 0        | 0             | 0            | 28        |
| worldwar  | 316         | 3805       | 834      | 781           | 781          | 11        |

## Average Latency (s)

| Query     | Meilisearch | Opensearch | Postgres | SQLite (Disk) | SQLite (Mem) | Typesense |
| --------- | ----------- | ---------- | -------- | ------------- | ------------ | --------- |
| awakening | 0.24        | 0.31       | 0.01     | 0.0           | 0.0          | 0.15      |
| comedy    | 0.05        | 0.05       | 0.0      | 0.0           | 0.0          | 0.06      |
| love      | 0.02        | 0.05       | 0.0      | 0.01          | 0.0          | 0.04      |
| romance   | 0.09        | 0.06       | 0.0      | 0.0           | 0.0          | 0.08      |
| spy       | 0.08        | 0.08       | 0.01     | 0.0           | 0.0          | 0.08      |
| superhero | 0.09        | 0.26       | 0.11     | 0.03          | 0.02         | 0.5       |
| superhero | 0.31        | 0.28       | 0.02     | 0.01          | 0.0          | 0.26      |
| superman  | 0.08        | 0.45       | 0.03     | 0.01          | 0.0          | 0.1       |
| suprman   | 0.09        | -          | -        | -             | -            | 0.1       |
| worldwar  | 0.03        | 0.04       | 0.0      | 0.01          | 0.0          | 0.3       |

---

_Data migrated from original JS data file. For dynamic/interactive
visualizations, use the original data structure._
