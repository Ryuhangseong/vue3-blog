/*
 * @Author: ryuhangseong liuhangcheng2002@gmail.com
 * @Date: 2022-10-06 09:53:59
 * @LastEditors: ryuhangseong liuhangcheng2002@gmail.com
 * @LastEditTime: 2022-10-06 09:54:04
 * @FilePath: \vue3-blog\src\api\model\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by ryuhangseong liuhangcheng2002@gmail.com, All Rights Reserved.
 */
/** @说明 ： 后台接口返回 情话类型 */
export type qinghuaType = string; // 说明，情话  --  这个接口 ，返回的数据类型确定时字符串类型

/** 例如 其他数据返回格式 也可以这样定义 */
export interface testType {
  url: string;
  data: string[]; // Array<string> 也可
  count: number;
  // ...
}
