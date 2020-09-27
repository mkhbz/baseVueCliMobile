// 获取值
export function getUrlParams(name) {
  if (!name) return null;
  var after = window.location.search;
  after = after.substr(1) || window.location.hash.split('?')[1];
  if (!after) return null;
  if (after.indexOf(name) === -1) return null;

  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = decodeURI(after).match(reg);
  if (!r) return null;

  return r[2];

}
// 根据userAgent判定是否android
export function isAndroid() {
  return navigator.userAgent.indexOf('Android') !== -1;
}
// 根据ua判定是否ios浏览器
export function isIos() {
  var u = navigator.userAgent;
  if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
      return true;
  }
  return false;
}