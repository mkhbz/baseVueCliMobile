import axios from "axios"
import errorHandler, { httpErrorHandler } from './axios-error-handler';
import { getEncodeToken } from './auth';
import { API_BASE_URL, Dictionaries } from '@/utils/constants'
import { EventBus } from '@/utils/bus'
import { Toast } from "vant";

// 创建axios实例
const service = axios.create({
  baseURL: API_BASE_URL, // api的base_url
  timeout: 120000 // 请求超时时间
});

axios.defaults.withCredentials = true;
// request拦截器
service.interceptors.request.use(
  config => {
    // Do something before request is sent   设置请求头先注释
    EventBus.$emit('ajaxCount', Dictionaries.increase)
    if (getEncodeToken()) {
      config.headers['token'] = getEncodeToken();
    }
    return config;
  },
  error => {
    // Do something with request error
    Toast({
      message: '服务器繁忙，请稍后再试',
      type: 'error',
      duration: 2.5 * 1000
    });
    return Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    EventBus.$emit('ajaxCount', Dictionaries.reduce)
    const { data, status } = response;
    const { message, code, msg } = data;
    if (status === 200 && code !== 'fail') {
      return Promise.resolve(data);
    }
    errorHandler(code, message || msg, response);
    return Promise.reject(new Error(data.message || 'Error'));
  },
  error => {
    EventBus.$emit('ajaxCount', Dictionaries.reduce)
    // 暂定为不提示信息
    // httpErrorHandler(error)
    console.log("请求接口response处理：=====》")
    console.log(error)
    // Toast({
    //   message: error,
    //   type: 'error',
    //   duration: 2.5 * 1000
    // });
    return Promise.reject(error);
  }
);

export {
  service as Http
}