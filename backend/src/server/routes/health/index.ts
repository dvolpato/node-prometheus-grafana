import Router from "@koa/router";

const router = new Router();

router.get("/liveness", async (ctx) => {
  ctx.status = 200;
});

router.get("/readiness", async (ctx) => {
  ctx.status = 200;
});

export default router;
