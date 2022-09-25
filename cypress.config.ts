/*
 * @Author: ryuhangseong liuhangcheng2002@gmail.com
 * @Date: 2022-09-25 15:28:08
 * @LastEditors: ryuhangseong liuhangcheng2002@gmail.com
 * @LastEditTime: 2022-09-25 15:36:39
 * @FilePath: \vue3-blog\cypress.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by ryuhangseong liuhangcheng2002@gmail.com, All Rights Reserved.
 */
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
});
