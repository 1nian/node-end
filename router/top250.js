const top = require('koa-router')();
const query = require('../db');

top.get('/get-all',async (ctx,next) => {
    let sql = 'SELECT * FROM top_pool'
    let data = await new Promise(((resolve, reject) => {
        query(sql,'',(err,res) => {
            if (err) throw reject(err);
            return resolve(res);
        })
    }))
    ctx.body = data;
})

top.get('/get',async (ctx,next) => {
    let sql = 'SELECT * FROM top_pool WHERE id = ?'
    let data = await new Promise(((resolve, reject) => {
        query(sql,ctx.query.id,(err,res) => {
            if (err) throw reject(err);
            return resolve(res);
        })
    }))
    ctx.body = data;
})

top.get('/update',async (ctx,next) => {
    let sql = 'UPDATE top_pool SET title = ? WHERE id = ?';
    let values = [ctx.query.title,ctx.query.id];
    let data = await new Promise((resolve,reject) => {
        query(sql,values,(err,res) => {
            if (err) throw reject(err);
            return resolve(res);
        })
    })
    ctx.body = data;
})

top.get('/delete',async (ctx,next) => {
    let sql = 'DELETE top_pool SET WHERE id = ?';
    let data = await new Promise((resolve,reject) => {
        query(sql,ctx.query.id,(err,res) => {
            if (err) throw reject(err);
            return resolve(res);
        })
    })
    ctx.body = data;
})

module.exports = top;
