// express 服务端文件
const express = require('express')
const mongoose = require('mongoose')
// 在express中使用cookie 依赖cookie-parser

// 链接 mongodb 并且使用imooc这个集合。没有该集合会自动新建
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',()=>{ // 判断连接是否成功
  console.log('mongo connect success')
})
// 类似于mysql的表，mongo 里面有文档、字段的概念


const app = express()

app.get('/',(req,res)=>{
  res.send('<h1>hello wold!</h1>')
})
app.get('/data',(req,res)=>{
  res.json({'name':'唐三','age':25})
})
app.listen(9093,()=>{
  console.log(`node app start in port 9093`)
})
