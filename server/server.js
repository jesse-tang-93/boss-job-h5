// express 服务端文件
const express = require('express')
const userRouter = require('./user')
const app = express()

app.use('/user',userRouter)


// app.get('/data',(req,res)=>{
//   res.json({'name':'唐三','age':25})
// })
app.listen(9093,()=>{
  console.log(`node app start in port 9093`)
})
