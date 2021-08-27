const router = require('koa-router')();

const top = require('./top250')

router.use('/top',top.routes(),top.allowedMethods());

module.exports = router;
