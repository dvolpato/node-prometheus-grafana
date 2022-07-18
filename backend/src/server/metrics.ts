import { koaMiddleware } from "prometheus-api-metrics";

const metrics = koaMiddleware();

export default metrics;