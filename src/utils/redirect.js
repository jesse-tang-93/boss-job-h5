export function getRedirectPath({userType,avatar}){
  console.log(arguments)
  // 根据用户信息跳转页面地址
  //user.type / boss / genius
  //user.avatar / bossinfo / geniusinfo
  let url = (userType === 'boss') ? '/boss' :'/genius'
  if(!avatar){
    url += 'info'
  }
  return url
}
