import { getToken } from '@/utils/auth'
import { getUrlParams } from '@/utils/util'
export const STORAGE_KEY = 'storage_key'//登录唯一标识

export const SYSTEM_NAME = '伙伴心声'
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080/'//接口环境地址

// 一些系统的开关
export const SystemSwitch = {
  ajaxLoading: true,//ajax请求的时候要不要打开loading，防止用户误操作
}

export const Dictionaries = {
  reduce: 'reduce',//减少ajax
  increase: 'increase'//增加ajax
}


