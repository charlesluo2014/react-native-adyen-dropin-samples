const Api = {}
//   添加文件到收藏夹
Api['pay_adyen_checkout_payment_methods'] = {
    url: '/pay/adyen/checkout/payment_methods',
    method: 'POST',
    requestBody: false,
}
Api['pay_adyen_checkout_payments'] = {
    url: '/pay/adyen/checkout/payments',
    method: 'POST',
    requestBody: true,
}

export default Api
