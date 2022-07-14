import Router from "@koa/router";

import health from "./health";

const router = new Router();

router.use("/health", health.routes(), health.allowedMethods());

router.get("/", (ctx) => {
  ctx.body = "Hello World!";
  ctx.status = 200;
});

export default router;
