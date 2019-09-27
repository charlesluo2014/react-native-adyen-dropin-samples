// import Cookies from 'js-cookie'
// import store from '@/vuex/store'
// import { store } from '../../redux'

const TokenKey = 'Auth-Token'
//import $P from '../platform/index'
const $P = {}

export function getAuthToken() {
  // let user = store.getState().user
  // if (user && user.authInfo) {
  //   return user.authInfo.authToken
  // }

  // if (true) {
  //     return '79E49F7D14100ADA742FDCE3F5279A64E9FA602F347FA362FB15E42502851C1E70F273DF200191B5E8E5D404C0DCDB2327B482D1EBB1F3196AFB9A82095F5F7DF3460A7223D73F39520BAEB3133DDB42D87A4524BE8570EC99E0F3301429C1E21ECD0D532657F4B94011164DC3E701CC26FE8A9B00A9D147D5F9B2A43DFDAD2C0BE65541A47AC42244158F002EB5D5BDAEF6EA6C3BC184BC8D7D00DB4FA4A7F9A50E85075F874F0FC0ACC5A86A199F08'
  // }
  // const token = null
  // if (
  //     token &&
  //     token !== undefined &&
  //     token !== 'undefined' &&
  //     token.length > 0
  // ) {
  //     return token
  // } else if (token) {
  //     return token
  // }
  // return '79E49F7D14100ADA742FDCE3F5279A64E9FA602F347FA362FB15E42502851C1E70F273DF200191B5E8E5D404C0DCDB2327B482D1EBB1F3196AFB9A82095F5F7DF3460A7223D73F39520BAEB3133DDB42D87A4524BE8570EC99E0F3301429C1E21ECD0D532657F4B94011164DC3E701CC26FE8A9B00A9D147D5F9B2A43DFDAD2C0BE65541A47AC42244158F002EB5D5BDAEF6EA6C3BC184BC8D7D00DB4FA4A7F9A50E85075F874F0FC0ACC5A86A199F08'
}

export function setAuthToken(token) {
  return $P.setStorageSync(TokenKey, token)
}

export function removeAuthToken() {
  return $P.removeStorageSync(TokenKey)
}
