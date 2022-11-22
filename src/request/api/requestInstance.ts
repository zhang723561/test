// 拦截器

import axios, { AxiosRequestConfig } from 'axios';
import { responseError, responseException } from './responseHandler';

export interface CustomRequestConfig extends AxiosRequestConfig {
  cache: any;
}

const CancelToken = axios.CancelToken;

const requestInstance = axios.create({
  baseURL: 'url', // API 请求的默认前缀
  timeout: 60000 // 请求超时时间
});

requestInstance.interceptors.request.use(
  // 在发送请求之前做些什么
  function (config) {
    // config.headers['Content-Type'] = 'application/json;'
    const CancelSource = CancelToken.source();
    config.cancelToken = CancelSource.token;

    if (config.url?.indexOf('/api') !== 0) {
      config.url = `/api${config.url}`;
    }

    // 是否启用缓存
    if ((config as CustomRequestConfig).cache) {

    }
    return config;
  },
  // 请求错误拦截
  function (error) {
    if (axios.isCancel(error)) {
      // cache缓存数据
      return Promise.resolve(error.message);
    }
    return Promise.reject(error);
  }
);

requestInstance.interceptors.response.use(
  function (response) {
    if (response.headers['content-type'] === 'application/octet-stream') {
      return response;
    }
    if (response.data.msg !== 'success' && response.data.code !== 200) {
      if (response.config.url?.includes('https://hit.gaojidata.com/')) {
        //打点服务报错不全局警告
        return responseException();
      } else {
        return responseException(response.data);
      }
    }
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    // 超出 2xx 范围的状态码都会触发该函数。
    if (axios.isCancel(error)) {
      // cache缓存数据
      return Promise.resolve(error.message);
    }

    if (error?.response?.status === 304) {
      return error.response;
    }

    return responseError(error);
  }
);

export default requestInstance;
