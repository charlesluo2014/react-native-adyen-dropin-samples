const Api = {}
Api['user_bind_email_send'] = { url: '/user/bind/email/send', method: 'get' }
Api['user_bind_email_confirm_{key}'] = {
  url: '/user/bind/email/confirm/{key}',
  method: 'get',
}
Api['user_bind_mobile'] = { url: '/user/bind/mobile', method: 'get' }
Api['user_login_email_code'] = {
  url: '/user/login/email_code',
  method: 'get',
  anonymous: true,
}
Api['user_login_email_password'] = {
  url: '/user/login/email_password',
  method: 'get',
  anonymous: true,
}
Api['user_login_name_password'] = {
  url: '/user/login/name_password',
  method: 'post',
  anonymous: true,
}
Api['user_login_mobile_code'] = {
  url: '/user/login/mobile_code',
  method: 'post',
  anonymous: true,
}
Api['user_login_mobile_code_with_action'] = {
  url: '/user/login/mobile_code_with_action',
  method: 'post',
  anonymous: true,
}

Api['user_login_mobile_password'] = {
  url: '/user/login/mobile_password',
  method: 'post',
  anonymous: true,
  requestBody: true,
}
Api['user_login_scan'] = {
  url: '/user/login/scan',
  method: 'get',
  anonymous: true,
}
//用户信息
Api['user_get_login'] = {
  url: '/user/get_login',
  method: 'get',
  anonymous: true,
  requestBody: true,
}
//信息更改
Api['user_update'] = {
  url: '/user/update',
  method: 'post',
  anonymous: true,
  requestBody: true,
}
Api['user_login_get_qrcode'] = {
  url: '/user/login/get_qrcode',
  method: 'get',
  anonymous: true,
}

Api['user_register_mobile_code'] = {
  url: '/user/register/mobile_code',
  method: 'post',
  anonymous: true,
}
Api['user_register_mobile_password'] = {
  url: '/user/register/mobile_password',
  method: 'get',
  anonymous: true,
}

Api['user_login_with_auth'] = {
  url: '/user/login/with_auth',
  method: 'get',
  anonymous: true,
}
Api['user_login_with_auth_user_info'] = {
  url: '/user/login/with_auth_user_info',
  method: 'get',
  anonymous: true,
}
//验证手机号
Api['sms_send_verify_code'] = {
  url: '/sms/send_verify_code',
  method: 'post',
  anonymous: true,
}

//忘记密码
Api['user_forgot_reset_password_mobile'] = {
  url: '/user/forgot/reset_password_mobile',
  method: 'post',
  anonymous: true,
  requestBody: true,
}

Api['user_login_with_facebook'] = {
  url: '/user/login/with_facebook',
  method: 'post',
  anonymous: true,
}
Api['user_login_with_google'] = {
  url: '/user/login/with_google',
  method: 'post',
  anonymous: true,
}
Api['user_register_with_facebook'] = {
  url: '/user/register/with_facebook',
  method: 'post',
  anonymous: true,
}
Api['user_register_with_google'] = {
  url: '/user/register/with_google',
  method: 'post',
  anonymous: true,
}
Api['user_client_config'] = {
  url: '/user/client/config',
  method: 'post',
  anonymous: true,
}
export default Api
