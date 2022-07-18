import Koa from "koa";
import koaLogger from "koa-logger";
import bodyParser from "koa-bodyparser";
import c2k from "koa-connect";
import router from "./routes";
import metricsMiddleware from "./metrics";

const app = new Koa();
app.use(koaLogger());
app.use(bodyParser());
app.use(c2k(metricsMiddleware as any));
app.use(router.routes()).use(router.allowedMethods());

export default app;
