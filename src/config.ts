/*
 * @Author: ryuhangseong liuhangcheng2002@gmail.com
 * @Date: 2022-10-06 09:50:09
 * @LastEditors: ryuhangseong liuhangcheng2002@gmail.com
 * @LastEditTime: 2022-10-06 09:50:14
 * @FilePath: \vue3-blog\src\config.ts
 * @Description:
 *
 * Copyright (c) 2022 by ryuhangseong liuhangcheng2002@gmail.com, All Rights Reserved.
 */
/** 环境变量 */
const ENV = import.meta.env; // vite是以这种方式获取环境变量

/** 基础域名 `https://api.uomg.com`  */
export const BASE_URL = ENV.VITE_BASE_API;

/** 基础服务地址 */
export const URL = BASE_URL + "/api";
/** 超时时间 */
export const TIMEOUT = 6000;
