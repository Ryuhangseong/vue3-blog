import axios, { AxiosRequestConfig } from "axios";

import { BASE_URL, TIMEOUT } from "../config";
/**
 * @说明 接口请求返回信息 (按照自己的实际情况分配基础请求格式)
 */
// export interface requestReturnType<T = any> {
//   /**
//    * @说明 返回code状态码
//    */
//   code: number;
//   /**
//    * @说明 返回错误code状态码
//    */
//   errcode?: number;
//   /**
//    * @说明 返回信息说明
//    */
//   msg: string;
//   /**
//    * @说明 返回总体数据
//    */
//   data: T;
//   /**
//    * @说明 返回请求成功是否
//    */
//   success: boolean | null;
// }

export interface requestReturnType<T = any> {
  /**
   * @说明 返回code状态码
   */
  code: number;
  /** 数据内容 */
  content: T;
}

/** 创建axios实例 */
const instance = axios.create({
  timeout: TIMEOUT, // 超时时间
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/** 添加请求拦截 */
instance.interceptors.request.use(
  (config) => {
    console.log("config", config);
    // if (config.showLoading) {
    //   showFullScreenLoading()
    // }

    /** 请求拦截-可做网络加载开始动作 */
    // ...
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

/**  响应拦截 */
instance.interceptors.response.use(
  (response) => {
    // if (response.config.showLoading) {
    //   tryHideFullScreenLoading()
    // }
    /** 响应拦截-可做网络加载完成动作 */
    // ...
    return response;
  },
  (error) => {
    // tryHideFullScreenLoading()
    console.log(`error:`, error);
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败";
    }
    /** 错误逻辑处理，此处可在页面弹框处理 */
    // ...
    return Promise.reject(error.message);
  }
);
/** 代理请求 */
// 注意此处的泛型T，默认值时any；兼容未提供指定类型的方式
async function httpProxy<T = any>(
  config: AxiosRequestConfig
): Promise<requestReturnType<T>> {
  const resData = await instance(config);
  return resData.data;
}

export default httpProxy;
