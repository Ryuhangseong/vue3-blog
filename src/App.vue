<!--
 * @Author: ryuhangseong liuhangcheng2002@gmail.com
 * @Date: 2022-09-25 15:50:13
 * @LastEditors: ryuhangseong liuhangcheng2002@gmail.com
 * @LastEditTime: 2022-09-26 20:18:34
 * @FilePath: \vue3-blog\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by ryuhangseong liuhangcheng2002@gmail.com, All Rights Reserved. 
-->

<!-- <script lang="ts" setup>
import { ElButton } from "element-plus";
import { ElMessage } from "element-plus";
// import "element-plus/es/components/button/style/css";
// import "element-plus/es/components/message/style/css";
// import { request } from "./utils/request";
import { UserService } from "./api/api";

const login = () => {
  ElMessage("this is a message.");
  UserService.login1({ username: "liuhangcheng" });
};
</script> -->
<script lang="ts" setup>
import { onMounted } from "vue";
import { UserService } from "./api/api";
import { ElMessage } from "element-plus";

onMounted(() => {
  login1();
  login2();
});

const login1 = async () => {
  const loginParams = {
    username: "test",
    password: "test",
  };
  const res = await UserService.login1(loginParams);
  console.log(res);
};

const login2 = () => {
  const loginParams = {
    username: "test",
    password: "test",
  };
  UserService.login2(loginParams).then((res) => {
    console.log(res);
    console.log("LOGIN1 WRONG!");
  });
};

const login = () => {
  ElMessage("this is a message.");
  const loginParams = {
    username: "test",
    password: "test",
  };
  UserService.login2(loginParams).then((res) => {
    console.log(res);
    console.log("LOGIN2 WRONG!");
  });
};
</script>

<template>
  <div>
    <el-button @click="login()">login</el-button>
  </div>
</template>
