import * as client from "prom-client";

const register = new client.Registry();
register.setDefaultLabels({
  app: "node-prom-grafana-poc",
});

client.collectDefaultMetrics({
  prefix: "backend_",
  register
});

export default register;