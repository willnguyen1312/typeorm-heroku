import * as koa from 'koa'
import * as route from 'koa-router'

const router = new route()

router.get('/', ctx => ctx.body = "Make it baby")

const app = new koa()

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(process.env.PORT || 3000)