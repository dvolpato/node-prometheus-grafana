# node-prometheus-grafana

A PoC for monitoring a Node.js system with Prometheus on Grafana.

Main branch collects default metrics only.

See branches for automatically collecting stats on HTTP requests:
* [branch](https://github.com/dvolpato/node-prometheus-grafana/tree/prometheus-api-metrics) for [prometheus-api-metrics](https://www.npmjs.com/package/prometheus-api-metrics) package
* [branch](https://github.com/dvolpato/node-prometheus-grafana/tree/express-prom-bundle) for [express-prom-bundle](https://www.npmjs.com/package/express-prom-bundle) package

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

To test metrics:

```bash
curl localhost:3000/

curl localhost:3000/slow

curl localhost:3000/unstable

curl localhost:3000/with-param/A1/B2
```