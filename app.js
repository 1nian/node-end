const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const nunjucks = require('nunjucks');
const static = require('koa-static');
const router = require('./router/router');

app.use(views(__dirname + '/views',{
    map:{html:"nunjucks"}
}))

app.use(static('./'));
app.use(router.routes());
app.use(router.allowedMethods()); //允许所有请求

app.listen(3030,() => {
    console.log('服务启动成功:http://localhost:3030');
});



