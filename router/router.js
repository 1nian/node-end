const router = require('koa-router')();

const top = require('./top250');
const home = require('./home');

router.use('/top',top.routes(),top.allowedMethods());
router.use('/home',home.routes(),home.allowedMethods());

module.exports = router;
