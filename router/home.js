const home = require('koa-router')();

home.get('/',async (ctx) =>{
    await ctx.render("index",{
        title:"首页"
    })
})

module.exports = home;