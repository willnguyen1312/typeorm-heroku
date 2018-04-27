"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const route = require("koa-router");
const router = new route();
router.get('/', ctx => ctx.body = "Hi baby");
const app = new koa();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(process.env.PORT || 3000);
//# sourceMappingURL=index.js.map