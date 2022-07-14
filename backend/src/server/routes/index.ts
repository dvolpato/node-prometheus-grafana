import Router from "@koa/router";

import health from "./health";
import metrics from "./metrics";

const router = new Router();

router.use("/health", health.routes(), health.allowedMethods());
router.use("/metrics", metrics.routes(), metrics.allowedMethods());

router.get("/", (ctx) => {
  ctx.body = "Hello World!";
  ctx.status = 200;
});

export default router;
