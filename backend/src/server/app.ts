import Koa from "koa";
import koaLogger from "koa-logger";
import bodyParser from "koa-bodyparser";
import router from "./routes";
import metrics from "./metrics";

const app = new Koa();
app.use(koaLogger());
app.use(bodyParser());
app.use(metrics);
app.use(router.routes()).use(router.allowedMethods());

export default app;
