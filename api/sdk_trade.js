const Api = {}
//   添加文件到收藏夹
Api['order_get_by_id'] = {
  url: '/order/get_by_id',
  method: 'POST',
  requestBody: true,
}
Api['business_order_buy_lesson'] = {
  url: '/business_order/buy/lesson',
  method: 'POST',
  requestBody: true,
}
Api['business_order_buy_special_columns'] = {
  url: '/business_order/buy/special_columns',
  method: 'POST',
  requestBody: true,
}

//查询历史订单
Api['business_order_list'] = {
  url: '/business_order/list',
  method: 'post',
  anonymous: true,
}
Api['business_order_list_renting'] = {
  url: '/business_order/list_renting',
  method: 'post',
  anonymous: true,
}

//扫码
Api['business_order_create'] = {
  url: '/business_order/create',
  method: 'post',
  anonymous: true,
  requestBody: true,
}

Api['rent_battery_order'] = {
  url: '/rent/battery/order',
  method: 'post',
  anonymous: true,
  requestBody: true,
}

Api['add_card_with_session'] = {
  url: '/bank_card/add_with_session',
  method: 'post',
  anonymous: true,
  requestBody: true,
}

Api['add_recurring_card'] = {
  url: '/bank_card/add_recurring',
  method: 'post',
  anonymous: true,
  requestBody: true,
}

Api['rent_battery_pay_result'] = {
  url: '/rent/battery/pay_result',
  method: 'post',
  anonymous: true,
  requestBody: false,
}

Api['business_order_item_get_by_id'] = {
  url: '/business_order_item/get_by_id',
  method: 'post',
  anonymous: true,
  requestBody: false,
}

Api['business_order_item_list_by_order'] = {
  url: '/business_order_item/list_by_order',
  method: 'get',
  anonymous: true,
  requestBody: false,
}

export default Api
