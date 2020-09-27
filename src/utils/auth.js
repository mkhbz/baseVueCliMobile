import _ from 'lodash'

export const STORAGE_KEY = 'base_vue_cli_mobile_storage_key'//登录唯一标识

export function getToken() {
  return _.get(JSON.parse(localStorage.getItem(STORAGE_KEY)), 'userId', null);
}
// 获取加密过后的userid
export function getEncodeToken(){
  return _.get(JSON.parse(localStorage.getItem(STORAGE_KEY)), 'enCode', null);
}

export function getUserInfo() {
  return localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : null;
}

export function updateUserInfo(userInfo) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo))
}

export function removeAuth() {
  return localStorage.removeItem(STORAGE_KEY);
}