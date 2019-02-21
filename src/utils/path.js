const NODE_ENV = process.env.NODE_ENV
export default (src) => {
  let prod_fix = '/h5'
  let img_fix = '/image/'
  return NODE_ENV === 'production' ? prod_fix + img_fix + src : img_fix + src
}
