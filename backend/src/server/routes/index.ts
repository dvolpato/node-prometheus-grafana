import {
  setTimeout,
} from 'timers/promises';

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

router.get("/slow", async (ctx) => {
  // random number between 1 and 5
  const random = Math.floor(Math.random() * 5) + 1;
  const randomSeconds = random * 1000;
  await setTimeout(randomSeconds);
  ctx.body = "Slow...";
  ctx.status = 200;
})

router.get("/unstable", (ctx) => {
  ctx.body = "Unstable...";
  const random = Math.random();
  ctx.status = random < 0.5 ? 200 : 500;
});

router.get("/with-param/:paramA/:paramB", (ctx) => {
  ctx.body = `With parameters: ${ctx.params.paramA} / ${ctx.params.paramB}`;
  ctx.status = 200;
});

export default router;
