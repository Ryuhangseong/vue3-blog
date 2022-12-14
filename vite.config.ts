/*
 * @Author: ryuhangseong liuhangcheng2002@gmail.com
 * @Date: 2022-09-21 21:22:31
 * @LastEditors: ryuhangseong liuhangcheng2002@gmail.com
 * @LastEditTime: 2022-09-26 16:54:30
 * @FilePath: \vue3-blog\vite.config.ts
 * @Description: .
 *
 * Copyright (c) 2022 by ryuhangseong liuhangcheng2002@gmail.com, All Rights Reserved.
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ElementPlus(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    open: true,
    port: 8080,
    strictPort: true,
  },
});
