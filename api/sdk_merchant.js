const Api = {}

Api['merchant_get_by_position'] = {
  url: '/merchant/get_by_position',
  method: 'post',
}
Api['merchant_list_by_region'] = {
  url: '/merchant/list_by_region',
  method: 'post',
}
//根据关键字获取附近商户（搜索页面）
Api['merchant_list'] = {
  url: '/merchant/list',
  method: 'post',
  requestBody: true,
}
//根据定位获取附近商户（搜索页面）=>获取商家详情
Api['merchant_get_by_id'] = { url: '/merchant/get_by_id', method: 'post' }

export default Api
