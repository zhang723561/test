// 异常处理

import { AxiosResponse } from 'axios';
import { CustomRequestConfig } from './requestInstance';

// 后端接口返回数据基本格式
export interface BaseResponse {
  code: number;
  data: any;
  message?: string;
  msg?: string;
}

// 退出登录
export function clearLogin(path: Location | (string & Location)) {
  setTimeout(() => {
    // window.location = window.location.origin + '/ub-login?path=' + path
    window.location = path;
  }, 400);
}

// 接口返回异常处理
export function responseException(resp?: BaseResponse) {

  if (resp) {
    if (resp.code === 401 ) {
      clearLogin(resp.data);
    }
    alert({
      message: 'error',
      description: resp.message || resp.msg
    });
  }
  return Promise.reject(resp && resp.message);
}

// 请求响应成功处理函数
export function responseSuccess(res: AxiosResponse<BaseResponse>) {
  const successFlag = res.status ? (res.status >= 200 && res.status < 300) || res.status === 304 : false;
  if (successFlag) {
    // 接口正常返回数据
    const data = res.data;
    if (data.code === 200 && (res.config as CustomRequestConfig).cache) {

    }

    if (data.code >= 300 && data.code !== 304) {
      return responseException(data);
    }

    return data;
  } else {
    if (typeof res === 'string') {
      alert({
        message: 'error',
        description: res
      });
    }
    return Promise.reject(res);
  }
}

// 请求响应错误处理函数
export function responseError(error:any) {
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;
    if (status === 401 || status === 403) {
      alert({
        message: 'error',
        description: data.message
      });
      // 从 localstorage 获取 token
      if (status === 401) {
        clearLogin(data.data);
      }
    }
  }
  return Promise.reject(error);
}
