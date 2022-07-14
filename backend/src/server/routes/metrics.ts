import Router from "@koa/router";

import metricsRegister from "../metrics";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = await metricsRegister.metrics();
  ctx.status = 200;
});

export default router;
