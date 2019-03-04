export function getRedirectPath({userType,avatar}){
  console.log(arguments)
  // 根据用户信息跳转页面地址
  //user.type / boss / genius
  //user.avatar / bossinfo / geniusinfo
  let url = (userType === 'boss') ? '/boss' :'/genius'  // boss和牛人
  if(!avatar){ // 没有用户头像说明未完善用户信息，跳转至完善信息页面 bossinfo 和geniusinfo
    url += 'info'
  }
  return url
}
