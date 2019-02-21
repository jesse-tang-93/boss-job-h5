// logo 组件部分
import React from 'react'
import path from '@/utils/path.js'
const LogoComponent  = () => {
  return(
    <img src={path('logo.jpeg')} alt=''className='logo_img'/>
  )
}

export default LogoComponent
