# node-prometheus-grafana

A PoC for monitoring a Node.js system with Prometheus on Grafana.

Uses package [prometheus-api-metrics](https://www.npmjs.com/package/prometheus-api-metrics) for automatically collecting stats on routes.

## Running

To run:

```bash
docker-compose build
docker-compose up
```

This starts:

* Node app at http://localhost:3000/
  * metrics at http://localhost:3000/metrics
* Prometheus at http://localhost:9000/
* Grafana at http://localhost:3100/

To test metrics, hit the following endpoints:

```bash
curl localhost:3000/

curl localhost:3000/slow

curl localhost:3000/unstable

curl localhost:3000/with-param/A1/B2
```