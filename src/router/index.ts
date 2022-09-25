/*
 * @Author: ryuhangseong liuhangcheng2002@gmail.com
 * @Date: 2022-09-25 15:50:13
 * @LastEditors: ryuhangseong liuhangcheng2002@gmail.com
 * @LastEditTime: 2022-09-25 16:45:35
 * @FilePath: \vue3-blog\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by ryuhangseong liuhangcheng2002@gmail.com, All Rights Reserved.
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
    },
  ],
});

export default router;
