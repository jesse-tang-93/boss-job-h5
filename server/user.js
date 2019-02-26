const express  = require('express')
const Router = express.Router()

Router.get('/info',function(req,res){
  // 用户有没cookie，进行cookie的校验
  return res.json({
    code:0,
  })
})
module.exports = Router
