import { api_request } from '../utils/http/request'
import BaseApi from './sdk_base'
import UserApi from './sdk_user'
import TradeApi from './sdk_trade'
import SearchApi from './sdk_search'
import UploadApi from './sdk_upload'
import IotApi from './sdk_iot'
import PaymentApi from './sdk_payment'
import MerchantApi from './sdk_merchant'

const Api = {}
Object.assign(Api, BaseApi)
Object.assign(Api, UserApi) //integrate user api
Object.assign(Api, TradeApi) //Trade api
Object.assign(Api, SearchApi)
Object.assign(Api, UploadApi)
Object.assign(Api, IotApi)
Object.assign(Api, PaymentApi)
Object.assign(Api, MerchantApi)

const APISDK = {}
for (const name in Api) {
  APISDK[name] = options => {
    return api_request(Api[name], options)
  }
}
export default APISDK
