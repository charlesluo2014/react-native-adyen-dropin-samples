const Api = {}
Api['vod_get_upload_signature'] = {
  url: '/vod/get_upload_signature',
  method: 'post',
  requestBody: false,
}
//   添加文件到收藏夹
Api['disk_get_upload_temp_session'] = {
  url: '/disk/get_upload_temp_session',
  method: 'post',
}
export default Api
