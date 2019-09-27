const Api = {}
Api['device_track_create'] = {
  url: '/device_track/create',
  method: 'post',
  requestBody: true,
}
Api['user_device_create_or_get'] = {
  url: '/user/device/create_or_get',
  method: 'post',
  requestBody: true,
}
Api['third_app_wx_login_with_grant_mobile'] = {
  url: '/third_app/wx/login_with_grant_mobile',
  method: 'post',
}
Api['third_app_wx_login_auth'] = {
  url: '/third_app/wx/login_auth',
  method: 'post',
}
Api['third_app_wx_bind_mobile_grant'] = {
  url: '/third_app/wx/bind_mobile_grant',
  method: 'post',
}
Api['third_app_wx_sync_user_info'] = {
  url: '/third_app/wx/sync_user_info',
  method: 'post',
}
//添加浏览记录
Api['visit_record_create'] = {
  url: '/visit_record/create',
  method: 'POST',
  requestBody: true,
}

//浏览记录 visit_record/list
Api['visit_record_list'] = {
  url: '/visit_record/list',
  method: 'POST',
  requestBody: true,
}

//根据定位获取附近商户
Api['merchant_get_by_position'] = {
  url: '/merchant/get_by_position',
  method: 'post',
}
//根据定位获取附近商户
Api['query_by_user_position'] = {
  url: 'query/by_user_position',
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

//国家列表
Api['country_list'] = { url: '/country/list', method: 'get', requestBody: true }

//faq
Api['faq_list'] = { url: '/faq/list', method: 'get', requestBody: true }
//faq
Api['business_order_get_by_id'] = {
  url: '/business_order/get_by_id',
  method: 'get',
  requestBody: true,
}

//问题反馈
Api['feedback_create'] = {
  url: '/feedback/create',
  method: 'post',
  requestBody: true,
}

export default Api
