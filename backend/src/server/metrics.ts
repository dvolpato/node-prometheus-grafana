import * as client from "prom-client";

const register = new client.Registry();
register.setDefaultLabels({
  app: "backend",
});

client.collectDefaultMetrics({ register });

export default register;