import Koa from "koa";
import koaLogger from "koa-logger";
import bodyParser from "koa-bodyparser";
import router from "./routes";

const app = new Koa();
app.use(koaLogger());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

export default app;
