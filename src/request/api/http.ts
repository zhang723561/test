// 请求事件封装

import { AxiosRequestConfig } from 'axios';
import requestInstance from './requestInstance';
import { BaseResponse, responseSuccess } from './responseHandler';

// interface RequestConfig extends AxiosRequestConfig {}

export class Http {
  // get请求
  async get<T = BaseResponse>(url: string, params?: { [key: string]: any }) {
    try {
      const res = await requestInstance.get(url, {
        params
      });
      return responseSuccess(res) as T;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // post请求
  async post<T = BaseResponse>(url: string, data?: { [key: string]: any }) {
    try {
      const res = await requestInstance.post(url, { ...data });
      return responseSuccess(res) as T;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // 发送任意类型请求
  async request<T = BaseResponse>(config: AxiosRequestConfig) {
    try {
      const res = await requestInstance.request(config);
      return responseSuccess(res) as T;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

const http = new Http();

export default http;
