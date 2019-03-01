const mongoose = require('mongoose')
// 在express中使用cookie 依赖cookie-parser

// 链接 mongodb 并且使用imooc这个集合。没有该集合会自动新建
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'
mongoose.connect(DB_URL,{ useNewUrlParser: true })
// mongoose.connection.on('connected',()=>{ // 判断连接是否成功
//   console.log('mongo connect success')
// })
// 类似于mysql的表，mongo 里面有文档、字段的概念

const models = {
    user:{
      'user':{type:String,require:true},
      'pwd':{type:String,require:true},
      'userType':{type:String,require:true},
      // 头像
      'avatar':{'type':String},
      // 简介
      'desc':{'type':String},
      // 职位名
      'title':{'type':String},
      // 如果是boss，多两个字段
      'company':{'type':String},
      'money':{'type':String},
    },
    chat:{

    }
}
for(let m in models){
  mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
  getModel:function(name){
    return mongoose.model(name)
  }
}
