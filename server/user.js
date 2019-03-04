const express  = require('express')
const utils = require('utility') // utilityMD5加密存储
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
// 内部使用的不让显示的过滤数据字段
const _filter ={
  'pwd':0,  // 不返回密码
  '__v':0   //  不返回版本号
}

Router.get('/list',function(req,res){
  //User.remove({},function(e,d){}) // 清除所有的用户信息数据
  User.find({},function(err,doc){
    return res.json(doc)
  })
})
Router.post('/register',function(req,res){
  console.log(req.body)
  const {user,pwd,userType} = req.body
  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1,msg:'用户名重复，用户已经存在'})
    }
    User.create({
      user,pwd:md5Pwd(pwd),userType
    },function(e,d){
      if(e){
        return res.json({code:1,msg:'后端出错了'})
      }
      return res.json({code:0,msg:'注册成功'})
    })
  })
})
Router.post('/login',function(req,res){
  const {user,pwd} = req.body
  User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(e,d){
    if(!d){
      return res.json({code:1,msg:'用户名或密码错误！'})
    }
    // 登录成功后设置cookie
    res.cookie('userid',d._id)
    return res.json({code:0,data:d})
  })

})
Router.get('/info',function(req,res){
    // 用户有没cookie，进行cookie的校验
   const {userid } = req.cookies
   if(!userid){
     return res.json({code:1,})
   }
   User.findOne({_id:userid},_filter,function(e,d){
     if(e){
       return res.json({code:1,msg:'后端出错了'})
     }
     if(d){
       return res.json({code:0,data:d})
     }

   })


})
Router.post('/clearUserData',function(req,res){
  User.remove({},function(e,d){
    if(e){
      return res.json({code:1,msg:'清除失败'})
    }
    return res.json({code:0,msg:'清除用户数据成功'})
  })
})
// md5Pwd 两层加严
function md5Pwd(pwd){
  const salt = 'imooc_is_good_3957!@IUH~'  // 自定义一个加严规则
  return utils.md5(utils.md5(pwd+salt))  // 双重MD 形成合格的密码加密算法，

}
module.exports = Router
