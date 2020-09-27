import { Http } from '@/utils/axios'
// 获取用户的信息
export async function getUseInfo(userId) {
  return await Http.get(`/api/wechat/user/info/${userId}`)
}

// 上传多文件
export function uploadFile(file) {
  let formData = new FormData()
  // 单个文件的上传，
  formData.append('multipartFile', file)
  let url = '/api/ali/oss/upload'
  let headers = {
    'Content-Type': 'multipart/form-data'
  }
  return Http.post(url, formData, { headers: headers })
}

//获取企业微信的配置信息
export function getWxConfig() {
  return Http.get('/api/wechat/config');
}