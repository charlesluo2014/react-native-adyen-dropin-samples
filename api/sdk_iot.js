const Api = {}
//充电宝
Api['device_list'] = { url: '/device/list', method: 'get', requestBody: true }
Api['device_count'] = { url: '/device/count', method: 'get', requestBody: true }
Api['device_list_all'] = {
  url: '/device/list_all',
  method: 'get',
  requestBody: true,
}

Api['device_get_by_id'] = { url: '/device/get_by_id', method: 'get' }
// 机柜
Api['cabinet_list'] = { url: '/cabinet/list', method: 'get', requestBody: true }
Api['cabinet_count'] = {
  url: '/cabinet/count',
  method: 'get',
  requestBody: true,
}
Api['cabinet_update_by_id'] = {
  url: '/cabinet/update_by_id',
  method: 'get',
  requestBody: true,
}
Api['cabinet_list_all'] = {
  url: '/cabinet/list_all',
  method: 'get',
  requestBody: true,
}
Api['cabinet_create'] = {
  url: '/cabinet/create',
  method: 'get',
  requestBody: true,
}
Api['cabinet_reject'] = {
  url: '/cabinet/reject',
  method: 'get',
  requestBody: true,
}
Api['cabinet_get_one'] = {
  url: '/cabinet/get_one',
  method: 'get',
  requestBody: true,
}
Api['cabinet_pass'] = { url: '/cabinet/pass', method: 'get', requestBody: true }
Api['cabinet_get_by_id'] = { url: '/cabinet/get_by_id', method: 'get' }
Api['cabinet_get_by_sn'] = {
  url: '/cabinet/get_by_sn',
  method: 'post',
  requestBody: true,
} //查询机柜信息
Api['cabinet_rent'] = {
  url: '/cabinet/rent',
  method: 'post',
  requestBody: true,
} //租用
Api['cabinet_eject'] = {
  url: '/cabinet/eject',
  method: 'post',
  requestBody: true,
} //强制弹出
Api['cabinet_eject_all'] = {
  url: '/cabinet/eject_all',
  method: 'post',
  requestBody: true,
} //弹出全部
Api['cabinet_reboot'] = {
  url: '/cabinet/reboot',
  method: 'post',
  requestBody: true,
} //重启
Api['cabinet_sync_info'] = {
  url: '/cabinet/sync_info',
  method: 'post',
  requestBody: true,
} //刷新
Api['cabinet_item_list'] = {
  url: '/cabinet_item/list',
  method: 'post',
  requestBody: true,
}

//卡列表
Api['pay_adyen_recurring_list_recurring_details'] = {
  url: '/pay/adyen/recurring/list_recurring_details',
  method: 'get',
}

//绑定卡
Api['pay_adyen_checkout_add_card'] = {
  url: '/pay/adyen/checkout/add_card',
  method: 'post',
  requestBody: true,
}

//删除支付卡
Api['pay_adyen_recurring_disable'] = {
  url: '/pay/adyen/recurring/disable',
  method: 'post',
  requestBody: true,
}

//计费接口
Api['rent_battery_get_billing'] = {
  url: '/rent/battery/get_billing',
  method: 'get',
}

export default Api
