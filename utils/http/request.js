import { getAuthToken } from './auth.js'
import { getAccessToken } from './access_token.js'
import qs from 'qs'
import Config from '../config'

//const baseURL = Config.BASE_URL
//const baseURL = 'https://naki-test.ngrok.io'
//const baseURL = 'https://api-release.nakipower.com'
//const baseURL = 'https://api.zowalk.com'
//const baseURL = 'https://naki-test.ngrok.io'
//const baseURL = 'https://api-release.nakipower.com'
//  const baseURL = 'https://api.zowalk.com'

//const baseURL = Config.BASE_URL

//const baseURL = 'http://localhost:8082'

// const baseURL = 'http://192.168.5.92:8082'

const baseURL = 'http://192.168.1.10:8082'

export function api_request(config, options) {
  const pars = { ...config }
  if (pars.requestBody) {
    pars.method = 'post'
    return http.postJson(pars.url, options)
  }
  if (!pars.method) {
    pars.method = 'get'
  }
  pars.method = pars.method.toLowerCase()
  switch (pars.method) {
    case 'get':
      return http.get(pars.url, options)
    case 'post':
      return http.post(pars.url, options)
    default:
      return http.get(pars.url, options)
  }
}

const http = {
  request: function(requestData, contentType) {
    const ops = {}
    let header = {
      'Content-Type': 'application/json',
    }
    if (contentType === 'json') {
      header['Content-Type'] = 'application/json'
    } else {
      header['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    const authToken = getAuthToken()
    // console.log('authToken===============================' + authToken)
    if (authToken) {
      header['Authorization'] = `token ${authToken}`
      header['Auth-Token'] = `token ${authToken}`
    }
    const accessToken = getAccessToken()
    if (accessToken) {
      header['Access-Token'] = accessToken
    }
    if (requestData.url) {
      ops.url = `${baseURL}${requestData.url}`
    }
    if (requestData.data) {
      ops.data = requestData.data
    }

    if (requestData.method) {
      ops.method = requestData.method
    }
    ops.header = header

    return new Promise((resolve, reject) => {
      let options = {
        method: ops.method,
        headers: ops.header,
      }
      if (ops.method.toLowerCase() === 'get') {
        if (ops.url.indexOf('?') >= 0) {
          ops.url = ops.url + '&' + qs.stringify(ops.data)
        } else {
          ops.url = ops.url + '?' + qs.stringify(ops.data)
        }
      } else {
        options.body = ops.data
      }
      console.log('options=====================', ops)
      fetch(ops.url, options)
        .then(response => {
          console.log('response=====================', response, ops)
          return response.json()
        })
        .then(res => {
          console.log('res============', ops.url, res)
          let result = res.code
          if (result === '2000' && res.errorCode === 'SUCCESS') {
            resolve(res.data)
          } else {
            reject(res || `${result} request error！`)
          }
        })
        .catch(e => {
          console.log('e================', e, ops)
          reject(e)
        })
    })
  },
  get: function(url, data) {
    let ops = {
      url,
      data,
      method: 'GET',
    }
    return this.request(ops)
  },
  postJson: function(url, data) {
    data = JSON.stringify(data)
    let ops = {
      url,
      data,
      method: 'POST',
    }
    return this.request(ops, 'json')
  },
  post: function(url, data, contentType) {
    data = qs.stringify(data)

    let ops = {
      url,
      data,
      method: 'POST',
    }
    // console.log('ops=================', ops)
    return this.request(ops, contentType)
  },
}
